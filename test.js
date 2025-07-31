
const { getRankBody } = require('./plugins.js')

fetch("https://rank.similarweb.com/api/v1/global", {
    method: "POST",
    body: getRankBody(),
    headers: {
        // "cookie": cookie
    }
})
.then(async (res) => {
   console.log('res', res, )
   const test = await res.json()
   console.log(test)
})
return
fetch('https://cdn.growthbook.io/sub/sdk-qbggv9YxTIirakmd', {
    headers: {
        "content-type":"text/event-stream",
        "x-served-by":"cache-iad-kjyo7100172-IAD, cache-qpg1231-QPG",
        "x-timer":"S1751993356.843660,VS0,VE1"
    }
})
.then(async(res) => {
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let incompleteLine = '';
    while (true) {
      // 读取流中的下一个块
      const { done, value } = await reader.read();
      
      if (done) {
        console.log('流读取完成');
        break;
      }
      
      // 解码二进制数据为文本
      const chunk = decoder.decode(value, { stream: true });
      
      // 将新数据添加到未完成的行
      incompleteLine += chunk;
      
      // 按行分割（事件流使用 \n\n 分隔事件）
      const lines = incompleteLine.split('\n');
      
      // 最后一行可能不完整，保存到下一次迭代
      incompleteLine = lines.pop() || '';
      
      // 处理每一行数据
      for (const line of lines) {
        if (line.trim() === '') continue; // 跳过空行
        
        // 解析 SSE 格式 (field: value)
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue; // 无效行
        
        const field = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trimStart();
        
        // 处理不同类型的字段
        switch (field) {
          case 'data':
            console.log('接收到数据:', value);
            // 这里可以触发自定义事件或处理数据
            break;
          case 'event':
            console.log('事件类型:', value);
            break;
          case 'id':
            console.log('事件ID:', value);
            break;
          case 'retry':
            console.log('重试时间(ms):', value);
            break;
          default:
            console.log('未知字段:', field, value);
        }
      }
    }
})
.catch(err => {
    console.log('err', err)
})

