
const app = 'AAEAAAAAAG0dLwIRJgAAAAAAAAAAAAAAAAAAAAAAAAA='
const version = '6.12.9'
const meta = 'exthead'
const tt = 'ajax'
const tmv = '6'
const pid = 'eck6djkk4n7t19neetfdqg7an68'
const ch = '0'
const v = '1'
const md ='21'
const iow = '1268531661'//tab id
const s = 'a86cb34f5'
const ts = new Date().getTime()
function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}

function getHt() {
    const date = Date.now()
    const dx = getRandomDecimal(200, 2000)
    const dy = getRandomDecimal(200, 1200)
    const md = Math.sqrt(dx*dx, dy*dy).toString()
    
    const td = date - Date.now()
    const tc = 2
    const pnArr = process.hrtime()
    const pn = pnArr[0]+'.'+pnArr[1]
    const type = "humanibility"
    // console.log(pn)
    return {
        type:type,
        data:{
            md:md,
            td:td,
            tc: tc,
            pn: pn
        }
    }
}
function getLink() {
    const domain = 'https://www.iploong.com/'
    const urls = ['usercenter/dashboard', 'usercenter/proxycity', 'usercenter/purchasetraffic', 
        'usercenter/purchaseproxy', 'usercenter/purchasedetail', 'usercenter/historyorder', 
        'usercenter/serviceterms', 'usercenter/privacypolicy', 'usercenter/legalnotice', 
        'usercenter/realauth', 'usercenter/promotion']
    const index = getRandomDecimal(0, urls.length-1)
    const index2 = getRandomDecimal(0, urls.length-1)
    const q = domain+urls[index]
    const prev = (domain+index2==index?(urls[index2+1]?urls[index2+1]:urls[index2-1]):urls[index2])
    return `q=${q}&link=${prev}&prev=${prev}`
}
function getRankBody() {
    const e = `${getLink()}&iow=${iow}&tt=${tt}&meta=${meta}&ht=${JSON.stringify([getHt()])}&ts=${ts}&ch=${ch}&s=${s}&pid=${pid}tmv=${6}&md=${21}&v=${1}&sub=${version}&app=${app}`
    // const data = {
    //     e: encodeURI(e),
    //     decode: 0
    // }
    return encodeURI(`e=${encodeURI(e)}&decode=0`)
}
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRes() {
    const int = getRandomInt(0,2)
    return ['2560x1440', '1920x1080', '3840*2560'][int]
}
function getMatomoParams(domain) {
    const time = new Date()
    const e_c = 'screen' //extension"screen", "view", "opt in
    const e_a = 'view'//scroll
    const e_n = 'data/iploong.com/non-registered'//100% //data/bitip.com/non-registered
    //dropdown open visit over time/historical data/non-registered 
    // visit over time/historical data/non-registered
    //extension scroll 100%
    //dropdown open keywords/organic & paid/non-registered
    //dropdown open keywords/more data/non-registered
    //dropdown click keywords/more data - volume/non-registered
    const ca = '1'
    const idsite = '4'//
    const rec = 1
    const r = String(Math.random()).slice(2, 8)
    const h = time.getHours()
    const m = time.getMinutes()
    const s = time.getSeconds()
    const url = `chrome-extension://lgecefcjlholabgliikbfdifhdfbfnma/panel/panel.html?domain=${domain}`
    const _id = ''
    const _idn = '1'
    const _refts = '0'
    const send_image = '0'
    const ft = ['pdf', 'qt', 'realp', 'wma', 'fla', 'java', 'ag']
    const str = ft.map(item=>`${item}=0`)
    const cookie = '1'
    const res = getRes()
    const pf_net = '0'
    const pf_srv = '0'
    const pf_tfr = getRandomInt(1,10)
    const pf_dm1 = getRandomInt(20,100)
    const pf_dm2 = '0'
    const pf_onl = '0'
    const uuid = generateUUID()
    console.log('uuid', uuid)
    // const dimension8 = '{"account_id":10000044,"base_product":"Your trial has ended","email":"rikizxc12@gmail.com","subscription_id":47529707,"user_id":37119755}'
    const dimension11 = '3c8c7441-503d-84e9-bd48-b74d9becc1dd'
    return `e_c=${e_c}&e_a=${e_a}&e_n=${e_n}&ca=${ca}&idsite=${idsite}&rec=${rec}&r=${r}&h=${h}&m=${m}&s=${s}&url=${url}&_id=${_id}&_idn=${_idn}&_refts=${_refts}&
    send_image=${send_image}&pdf=1&qt=0&realp=0&wma=0&fla=0&java=0&ag=0&cookie=${cookie}&res=${res}
    &dimension11=${uuid}&pf_net=${pf_net}&pf_srv=${pf_srv}&pf_tfr=${pf_tfr}&pf_dm1=${pf_dm1}&pf_dm2=${pf_dm2}&pf_onl=${pf_onl}`
ki
}
module.exports = {
    getRankBody,
    getMatomoParams
}