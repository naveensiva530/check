const http = require('http');
const fs = require('fs');

async function testFaq() {
  const pages = await new Promise((resolve) => {
    http.get('http://127.0.0.1:9222/json', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
  });

  const target = pages.find(p => p.url.includes('5173'));
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

  console.log('Navigating to http://localhost:5173/faq...');
  await send('Page.navigate', { url: 'http://localhost:5173/faq' });
  await new Promise(r => setTimeout(r, 3000));

  const res = await send('Runtime.evaluate', {
    expression: 'document.querySelectorAll("button").length',
    returnByValue: true
  });
  console.log('Button count on /faq:', res.result?.value);

  // Scroll to second FAQ item and click it
  const clickRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btns = Array.from(document.querySelectorAll('button')).filter(b => b.querySelector('h3'));
        if (btns[1]) {
          const top = btns[1].getBoundingClientRect().top + window.pageYOffset - 150;
          window.scrollTo({ top, behavior: 'instant' });
          btns[1].click();
          return { clicked: true, text: btns[1].innerText };
        }
        return { clicked: false, count: btns.length };
      })()
    `,
    returnByValue: true
  });
  console.log('Click result:', clickRes.result?.value);

  await new Promise(r => setTimeout(r, 300));
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('C:/Users/DELL/.gemini/antigravity-ide/brain/1782c592-43e3-4cc6-9589-9e9ca990c4b3/scratch/faq_page_actual_open.png', Buffer.from(shot.data, 'base64'));
  console.log('Saved faq_page_actual_open.png');

  ws.close();
}

testFaq().catch(console.error);
