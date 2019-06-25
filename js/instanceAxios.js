var $axios = axios.create({
    baseURL: '/img'
})

$axios.interceptors.response.use((res) => {
    var data = res.data;
    var obj = eval('('+ data + ')');
    return obj
})
