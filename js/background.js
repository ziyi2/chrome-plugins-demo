/**
 * Created by zhuxiankang on 2017/3/30.
 */



// chrome.browserAction.setIcon({
//     path:'image/play.png'
// });


//设置badge
chrome.browserAction.setBadgeText({text:'1'});

//设置右键菜单
chrome.contextMenus.create({
    type:"normal",
    title: "菜单1",
    id: "a"
});

chrome.contextMenus.create({
    type:"radio",
    title: "菜单2",
    id: "b"
});

chrome.contextMenus.create({
    type:"radio",
    title: "菜单3",
    id: "c",
    checked: true
});

chrome.contextMenus.create({
    type:"separator"
});

chrome.contextMenus.create({
    type:"checkbox",
    title: "菜单4",
    id: "d"
});

chrome.contextMenus.create({
    type:"normal",
    title: "菜单5",
    id: "f",
    parentId: "a"
});



//桌面提醒,参数有误
// var notification = chrome.notifications.create(
//     'icon16.png',
//     '桌面提醒',
//     '这是一个桌面提醒功能'
// );
//
// notification.show();


