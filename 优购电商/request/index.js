//记录同时发送requset异步请求的次数
let ajaxTimes=0;

export const request=(params)=>{
    ajaxTimes++;
    //显示加载效果  放在这里是因为很多地方都会用到
    wx.showLoading({
        title: "加载中",
        mask: true,
    });
      

    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:baseUrl+params.url,
            success:(result)=>{
                resolve(result.data.message);
            },
            fail:(err)=>{
                reject(err);
            },
            complete:()=>{
                ajaxTimes--;
                //几个同时开始的异步请求，全结束后才关闭，而不是一个结束，就关闭
                if(ajaxTimes===0){
                    //数据全请求完后 关闭加载效果
                    wx.hideLoading();
                }
            }
        });
    });
}