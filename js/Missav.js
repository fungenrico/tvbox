var rule = {
    title:'Missav',
    host:'https://missav.ai',
    url:'/cn/fyclass?page=fypage',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'最近更新&新作上市&无码流出&SIRO&LUXU&GANA&PRESTIGE&S-CUTE&ARA&FC2&麻豆传媒&本月热门',//静态分类名称拼接
    class_url:'new&release&uncensored-leak&siro&luxu&gana&maan&scute&ara&fc2&madou&monthly-hot',//静态分类标识拼接
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.posts&&.video_9s;h3&&Text;img&&src;.meta&&Text;a&&href',
    二级:'*',
}

