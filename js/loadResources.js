function loadResource (path) {
    return new Promise((resolve, reject) => {
        $axios.get(path).then(res => {
            const resource = {};
            var total = 0;
            var count = 0;
            for(let name in res){
                total++;
                const img = new Image();
                img.src = '/img/' + res[name].src;
                img.onload = function () {
                    count++;
                    resource[name] = {
                        img: this,
                        frame: res[name].frame
                    }
                    if(count == total){
                        resolve(resource)
                    }
                }
            }
        }).catch(e => {
            reject(e)
        })
    })

}

async function loadResources () {
    try {
        const resources = {
            fish: "fish.json",
            bottom: "bottom.json",
            coin: "coin.json",
            cannon: "cannon.json",
            bullet: "bullet.json"
        }
        const imgs = {};
        for(let name in resources){
            imgs[name] = await loadResource(resources[name]);
        }
        window.__g_resources = imgs;
    } catch(e){
        throw new Error('网络开了个小猜，请刷新重试...');
    }

}
