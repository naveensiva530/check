const http = require('http');
const fs = require('fs');

async function testAll() {
  const pages = await new Promise((resolve) => {
    http.get('http://127.0.0.1:9222/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const target = pages.find(p => p.url.includes('5173')) || pages[0];
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 1;

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const msgId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise(r => ws.onopen = r);

  const routes = [
    { url: 'http://localhost:5173/services/social-media-marketing', name: 'service_social' },
    { url: 'http://localhost:5173/services/seo-services', name: 'service_seo' },
    { url: 'http://localhost:5173/faq', name: 'faq_page' },
    { url: 'http://localhost:5173/contact', name: 'contact_page' },
    { url: 'http://localhost:5173/', name: 'home_page' }
  ];

  for (const r of routes) {
    console.log(`\nTesting ${r.name}: ${r.url}`);
    await send('Page.navigate', { url: r.url });
    await new Promise(res => setTimeout(res, 2000));

    // Scroll to FAQ
    const scrollRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btns = Array.from(document.querySelectorAll('button')).filter(b => b.querySelector('h3'));
          if (btns.length > 0) {
            const top = btns[0].getBoundingClientRect().top + window.pageYOffset - 150;
            window.scrollTo({ top, behavior: 'instant' });
            return { found: true, count: btns.length, firstText: btns[0].innerText };
          }
          // Check for home page accordion
          const homeFaq = Array.from(document.querySelectorAll('section')).find(s => s.innerText.includes('Frequently Asked'));
          if (homeFaq) {
            const top = homeFaq.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top, behavior: 'instant' });
            const items = homeFaq.querySelectorAll('h3');
            return { found: true, isHome: true, count: items.length, firstText: items[0]?.innerText };
          }
          return { found: false };
        })()
      `,
      returnByValue: true
    });
    console.log('FAQ section found:', scrollRes.result?.value);

    await new Promise(res => setTimeout(res, 400));

    // Click item
    const clickRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const btn = Array.from(document.querySelectorAll('button')).find(b => b.querySelector('h3'));
          if (btn) {
            btn.click();
            return { clicked: true, text: btn.querySelector('h3')?.innerText };
          }
          const homeCard = document.querySelector('section .rounded-full, section .rounded-\\\\[28px\\\\]');
          if (homeCard) {
            homeCard.click();
            return { clicked: true, homeCard: true };
          }
          return { clicked: false };
        })()
      `,
      returnByValue: true
    });
    console.log('Clicked item:', clickRes.result?.value);

    // Wait 250ms and capture
    await new Promise(res => setTimeout(res, 250));
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`C:/Users/DELL/.gemini/antigravity-ide/brain/1782c592-43e3-4cc6-9589-9e9ca990c4b3/scratch/${r.name}_opened.png`, Buffer.from(shot.data, 'base64'));
    console.log(`Saved ${r.name}_opened.png`);
  }

  ws.close();
  console.log('\nAll tests complete!');
}

testAll().catch(console.error);
