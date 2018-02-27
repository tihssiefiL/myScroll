(function () {
    console.log('this is myScroll.js')
} ())

let myScroll = function (dir,dis,speed,el,limit) {
    init = dis
    let timer = setInterval(()=> {
        dis ++
        let query = ''
        if (dir === 'U') {
            query = 'translate' + 'Y' + '(' + -dis + 'px)'
        }
        if (dir === 'D') {
            query = 'translate' + 'Y' + '(' + dis + 'px)'            
        }
        if (dir === 'L') {
            query = 'translate' + 'X' + '(' + -dis + 'px)'
            
        }
        if (dir === 'R') {
            query = 'translate' + 'X' + '(' + dis + 'px)'
            
        }
        el.style.transform = query
        // print(el.style.transform.replace(/[^0-9]/ig,""))
        if( el.style.transform.replace(/[^0-9]/ig,"") >= limit) {
            dis = init
            clearInterval(timer)
        }
    },speed)
}