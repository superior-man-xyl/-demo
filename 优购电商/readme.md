# 优购电商
/* wxss中定义主题颜色 */
    --themeColor:#eb4450;
/* 使用定义的颜色*/
color:var(--themeColor);

有优化url字符串长度，将公共部分定义，使用时拼接
且将request的返回值改为了result.data.message(因为数据都在相同的位置，简化了后面的书写)
使用了es7中的async await

小程序也支持url传参，在分类页到goods_list中就有这样应用