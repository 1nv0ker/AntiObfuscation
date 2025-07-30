const axios = require('axios')
const { _t } = require('./mixpanelNew.js')
const {HttpsProxyAgent} = require('https-proxy-agent');
const {HttpProxyAgent} = require('http-proxy-agent');
const { getMatomoParams } = require('./plugins.js')
const proxyString = `proxy.bitip.com:10001:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-765029642_l-10:127939ghg92g2f28
proxy.bitip.com:10002:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-46540_l-10:127939ghg92g2f28
proxy.bitip.com:10002:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-2845869_l-10:127939ghg92g2f28
proxy.bitip.com:10003:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-122270_l-10:127939ghg92g2f28
proxy.bitip.com:10001:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-3004608_l-10:127939ghg92g2f28
proxy.bitip.com:10003:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-3925206_l-10:127939ghg92g2f28
proxy.bitip.com:10002:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-77467617_l-10:127939ghg92g2f28
proxy.bitip.com:10002:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-38778995_l-10:127939ghg92g2f28
proxy.bitip.com:10002:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-253952097_l-10:127939ghg92g2f28
proxy.bitip.com:10001:1c7t3eykxutgrbitip_g-US_f-g9b029gh9g983g_sid-80420_l-10:127939ghg92g2f28`
const cookies = [
    // 'Hm_lvt_427c0b22bf914797e3b57a7be7db74fe=1752845285',
    // "_gcl_au=1.1.168098564.1752845287",
    // "_ga=GA1.1.945399864.1752845287",
    "sgID=28fb5f2c-c97d-4fa4-a0f5-630d583504d2",
    // "FPID=FPID2.2.mMy%2BQYITPvJpLOy6GgS%2BFA41Wu2IesycHBYjWAXf7U8%3D.1752845287",
    // "FPAU=1.1.168098564.1752845287",
    // "_pk_id.1.fd33=0933d9873972ecfe.1752845293.",
    // "sw_extension_installed=1752845293362",
    // "_ga_V5DSP51YD0=GS2.1.s1752894986$o2$g0$t1752894986$j60$l0$h578684216",
    // "gtmIdnts=%7B%22ga_cid%22%3A%22945399864.1752845287%22%2C%22ga_fpid%22%3A%22945399864.1752845287%22%2C%22ga_session_id%22%3A%221752894986%22%7D"
]
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const proxyConfig = getProxyConfig()
const httpsAgent = new HttpsProxyAgent({
    host: proxyConfig.host,
    port: proxyConfig.port,
    auth: `${proxyConfig.auth.username}:${proxyConfig.auth.password}`,
    digestAuth: true
})
const httpAgent = new HttpProxyAgent({
    host: proxyConfig.host,
    port: proxyConfig.port,
    auth: `${proxyConfig.auth.username}:${proxyConfig.auth.password}`,
    digestAuth: true
});
// console.log(proxyConfig)
// return
const axiosInstance = axios.create({
    // httpsAgent,
    timeout:0,
    httpAgent
});
// axiosInstance.interceptors.request.use(config => {
//   console.log('请求头（发送前）:', config.data);
//   return config;
// });
// axiosInstance.interceptors.response.use(config=>{
//     // console.log(config.headers)
//     return config
// })

function SendRequest() {
    // console.log(HttpsProxyAgent)
    const proxyConfig = getProxyConfig()
    const httpsAgent = new HttpsProxyAgent({
        host: proxyConfig.host,
        port: proxyConfig.port,
        auth: `${proxyConfig.auth.username}:${proxyConfig.auth.password}`,
        digestAuth: true
    })
    const httpAgent = new HttpProxyAgent({
        host: proxyConfig.host,
        port: proxyConfig.port,
        auth: `${proxyConfig.auth.username}:${proxyConfig.auth.password}`,
        digestAuth: true
    });
    // console.log(proxyConfig)
    // return
    const axiosInstance = axios.create({
        // httpsAgent,
        timeout:0,
        // httpAgent
    });
    const time = new Date().getTime()
    const url = `https://api-js.mixpanel.com/track/?verbose=1&ip=1&_=${time}`
    const data = getBody()
    // console.log('data', data)
    // const data = `data=%5B%0A%20%20%20%20%7B%22event%22%3A%20%22%24identify%22%2C%22properties%22%3A%20%7B%22%24os%22%3A%20%22Windows%22%2C%22%24browser%22%3A%20%22Microsoft%20Edge%22%2C%22%24current_url%22%3A%20%22https%3A%2F%2Fwww.iploong.com%2F%22%2C%22%24browser_version%22%3A%20138%2C%22%24screen_height%22%3A%201440%2C%22%24screen_width%22%3A%202560%2C%22mp_lib%22%3A%20%22web%22%2C%22%24lib_version%22%3A%20%222.45.0%22%2C%22%24insert_id%22%3A%20%22q8xq8vulbc8s1drj%22%2C%22time%22%3A%20${time/1000}%2C%22distinct_id%22%3A%20%22197e08aa6d8f80-091d9dd2ecb501-4c657b58-384000-197e08aa6d925d2%22%2C%22%24device_id%22%3A%20%22197e08aa6d8f80-091d9dd2ecb501-4c657b58-384000-197e08aa6d925d2%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22%24anon_distinct_id%22%3A%20%22197e08aa6d8f80-091d9dd2ecb501-4c657b58-384000-197e08aa6d925d2%22%2C%22token%22%3A%20%227ccb86f5c2939026a4b5de83b5971ed9%22%7D%7D%2C%0A%20%20%20%20%7B%22event%22%3A%20%22mp_page_view%22%2C%22properties%22%3A%20%7B%22%24os%22%3A%20%22Windows%22%2C%22%24browser%22%3A%20%22Microsoft%20Edge%22%2C%22%24current_url%22%3A%20%22https%3A%2F%2Fwww.iploong.com%2F%22%2C%22%24browser_version%22%3A%20138%2C%22%24screen_height%22%3A%201440%2C%22%24screen_width%22%3A%202560%2C%22mp_lib%22%3A%20%22web%22%2C%22%24lib_version%22%3A%20%222.45.0%22%2C%22%24insert_id%22%3A%20%22bvpuvsuy75tjvc2a%22%2C%22time%22%3A%201751818872.539%2C%22distinct_id%22%3A%20%22197e08aa6d8f80-091d9dd2ecb501-4c657b58-384000-197e08aa6d925d2%22%2C%22%24device_id%22%3A%20%22197e08aa6d8f80-091d9dd2ecb501-4c657b58-384000-197e08aa6d925d2%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22mp_page%22%3A%20%22https%3A%2F%2Fwww.iploong.com%2F%22%2C%22mp_browser%22%3A%20%22Microsoft%20Edge%22%2C%22mp_platform%22%3A%20%22Windows%22%2C%22token%22%3A%20%227ccb86f5c2939026a4b5de83b5971ed9%22%7D%7D%0A%5D`
    axiosInstance.post(url, data, {
        // httpsAgent: new HttpsProxyAgent('http://127.0.0.1:8888'),
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
            'origin':'https://www.iploong.com',
            'Referer':'https://www.iploong.com/',
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0',
            // 'sec-ch-ua-platform':"Windows",
            "Cookie":'_hjSessionUser_2879837=eyJpZCI6IjIyZWZkYzg3LTY4ZWYtNTZiNS05MTQ3LWU4YTdlOGNjMDFlYSIsImNyZWF0ZWQiOjE3NTE4NTI2OTM5MTUsImV4aXN0aW5nIjpmYWxzZX0=',
            "Accept":"*/*",
            "Accept-Encoding":"gzip, deflate, br, zstd",
            "Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            
        }
    })
    .then((res) => {
        console.log('res', res.data)
    })
    .catch(error => {
    console.error('请求失败:', error.message);
    if (error.response) {
      console.error('状态码:', error.response.status);
      console.error('响应数据:', error.response.data);
    }
  });
}
function getProxyConfig() {
    const proxyList = proxyString.split('\n')
    const num = getRandomInt(0, proxyList.length-1)
    const list = proxyList[num]
    if (list) {
        const proxy = list.split(':')
        const proxyConfig = {
            host: proxy[0], // 代理服务器地址
            port: proxy[1],                     // 代理服务器端口
            auth: {                         // 代理服务器认证信息
                username: proxy[2],
                password: proxy[3]
            }
        }
        return proxyConfig
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getBody() {
    let data = []
    const et = _t
    const identify = et.track('$identify', {
        distinct_id: et.get_distinct_id(),
        $anon_distinct_id: et.get_distinct_id()
        }, {
        skip_hooks: true
    })
    data.push(identify)
    const alias = et.track('$create_alias', {
        alias: et.get_distinct_id(),
        distinct_id: et.get_distinct_id()
    }, {
        skip_hooks: true
    }, function () {
        et.identify(et.get_distinct_id());
    })
    data.push(alias)
    const page = et.track_pageview('https://www.iploong.com/')

    data.push(page)
    return data?'data='+JSON.stringify(data):''
}
// getConfigData()
// getIdentity()
// SendRequest()
// let i = 0
// let interval = setInterval(() => {
//     i = i +1
//     if (i == 8) {
//         clearInterval(interval)
//     }
//     SendRequest()
// }, 5000);

// getFeatures()
// getConfig()
// getIdentity()
// getRank()
getMatomo()
function getConfig() {
    const url = 'https://rank.similarweb.com/content/config'
    const data = {
        sid:'a86cb34f5'
    }
    axios.post(url, JSON.stringify(data))
    .then(res => {
        console.log('res', res)
    })
}
function getConfigJson() {
    const url = `https://sw-extension.s3.amazonaws.com/config.json?v=${Date.now()}`
    axios.get(url)
    .then(res => {
        console.log('res', res.data)
    })
}
async function getConfigData(uuid) {
    const url = `https://data.similarweb.com/api/v1/data?domain=iploong.com`
    return await axios.get(url, {
        headers:{
             "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
            "Content-Type": "application/json",
            "DNT":1,
            "Priority":"u=1, i",
            "X-extension-version":"6.12.9",
            "Accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            // Cookie:cookies.join('; ')
            Cookie:`sgID=${uuid}`
        }
    })
    .then(res => {
       console.log(res.data)
    })
}

async function getIdentity(uuid) {
    const url = `https://data.similarweb.com/api/v1/identity`
    return await axios.get(url, {
        headers: {
           "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
            "Content-Type": "application/json",
            "DNT":1,
            "Priority":"u=1, i",
            "X-extension-version":"6.12.9",
            "Accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            Cookie:`sgID=${uuid}`
            
        },
        
    })
    .then(res => {
        console.log(res.data)
    })
}
async function getMatomo() {
    const uuid = generateUUID()
    await getConfigData(uuid)
    await getIdentity(uuid)
    const data = getMatomoParams('www.iploong.com', uuid)
    // console.log(encodeURI(data))
    const url = `https://matomo.similarweb.io/matomo.php?`+data
//     axiosInstance.get('https://api.ipify.org?format=json')
//     .then(response => {
//     console.log('当前服务器公网IP:', response.data.ip);
//   })
    await axiosInstance.post(url, null, {
        
        headers: {
            'Dnt': '1',
            "Content-Type":'application/x-www-form-urlencoded; charset=utf-8',
            "Priority":'u=4, i',
            "Origin":'chrome-extension://lgecefcjlholabgliikbfdifhdfbfnma',
            "Sec-Ch-Ua":`"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"`,
            "Sec-Ch-Ua-Mobile":'?0',
            "Sec-Ch-Ua-Platform":`"Windows"`,
            "User-Agent":`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0`,
            "Sec-Fetch-Dest":"empty",
            "Sec-Fetch-Mode":"no-cors",
            "Sec-Fetch-Site":"none",
            "Sec-Fetch-Storage-Access":"active",
            "Accept":"*/*",
            "Accept-Encoding":"gzip, deflate, br, zstd",
            "Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "Content-Length":"0"
        }
    })
    .then((res) => {
        const ip = res.request.socket.remoteAddress
        // console.log('res',  res.request._headers)
        console.log('res',  res.status)
        console.log('ip', ip)
    })
    const data2 = getMatomoParams('www.iploong.com', uuid, 2)
    const url2 = `https://matomo.similarweb.io/matomo.php?`+data2
    await axiosInstance.post(url2, null, {
        
        headers: {
            'Dnt': '1',
            "Content-Type":'application/x-www-form-urlencoded; charset=utf-8',
            "Priority":'u=4, i',
            "Origin":'chrome-extension://lgecefcjlholabgliikbfdifhdfbfnma',
            "Sec-Ch-Ua":`"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"`,
            "Sec-Ch-Ua-Mobile":'?0',
            "Sec-Ch-Ua-Platform":`"Windows"`,
            "User-Agent":`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0`,
            "Sec-Fetch-Dest":"empty",
            "Sec-Fetch-Mode":"no-cors",
            "Sec-Fetch-Site":"none",
            "Sec-Fetch-Storage-Access":"active",
            "Accept":"*/*",
            "Accept-Encoding":"gzip, deflate, br, zstd",
            "Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "Content-Length":"0"
        }
    })
    .then((res) => {
        const ip = res.request.socket.remoteAddress
        // console.log('res',  res.request._headers)
        console.log('res',  res.status)
        console.log('ip', ip)
    })
}
function getRank() {
    const url = `https://rank.similarweb.com/api/v1/global`
    const data = `e=q%3Dhttps%253A%252F%252Fwww.iploong.com%252F%2523third%26link%3Dhttps%253A%252F%252Fwww.iploong.com%252F%2523third%26prev%3Dhttps%253A%252F%252Fwww.iploong.com%252F%2523third%26hreferer%3D%26iow%3D1268531150%26tt%3Dreload%26meta%3Dexthead%26ts%3D1752127827943%26ch%3D0%26s%3Da86cb34f5%26pid%3Deck6djkk4n7t19neetfdqg7an68%26tmv%3D6%26md%3D21%26v%3D1%26sub%3D6.12.9%26app%3DAAEAAAAAAG0dLwIRJgAAAAAAAAAAAAAAAAAAAAAAAAA%253D&decode=0`
    axios.post(url, data)
    .then(res => {
        console.log('res', res)
    })
}

function getFeatures() {
    const url = 'https://cdn.growthbook.io/api/features/sdk-qbggv9YxTIirakmd'
    axios.get(url, {
        headers: {
            "sec-ch-ua-platform":"Windows",
            "sec-ch-ua-mobile":"?0",
            "sec-ch-ua":`"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"`,
            "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
        }
    })
    .then(res => {
        console.log('res', res)
    })
}