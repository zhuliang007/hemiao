/**
 * Created by Administrator on 2016/4/21.
 */

var config = {
  requestUrl:{
    test:"http://192.168.100.67:8080/",
    publish:"",
    img:""
  },
  filePath:{
    userHead:"img/userHead/",
    adImg:"img/adImg/",
    productImg:"img/productImg/"
  },
  modals:{
    publishSelectModal:{
      modal:"publishSelectModal",
      templateUrl:"templates/modal/hm-modal-publish-select.html",
      animation:"slide-in-up"
    },
    loginModal:{
      modal:"loginModal",
      templateUrl:"templates/modal/hm-modal-login.html",
      animation:"slide-in-up"
    },
    cityModal:{
      modal:"cityModal",
      templateUrl:"templates/modal/hm-modal-citys.html",
      animation:"slide-in-up"
    }
  },
  loading:{
    templateUrl:"templates/loading/loading.html",
  },
  controllers:{
    //tab导航栏
    tabs:{
      templateUrl:"templates/tabs/hm-tabs.html",
      url:"/tabs",
      name:"tabs"
    },
    //首页
    tabsHome:{
      templateUrl:"templates/tabs/hm-tabs-home.html",
      url:"/home",
      name:"tabs.home",
      controller:"HomeCtrl"
    },
    //求购
    tabsShopping:{
      templateUrl:"templates/tabs/hm-tabs-shopping.html",
      url:"/shopping",
      name:"tabs.shopping",
      controller:"ShoppingCtrl"
    },
    //消息
    tabsMessage:{
      templateUrl:"templates/tabs/hm-tabs-message.html",
      url:"/message",
      name:"tabs.message",
      controller:"MsgCtrl"
    },
    //个人
    tabsPersonal:{
      templateUrl:"templates/tabs/hm-tabs-personal.html",
      url:"/personal",
      name:"tabs.personal",
      controller:"PersonalCtrl"
    },
    //发布出售
    publishSale:{
      templateUrl:"templates/publish/publish.html",
      url:"/publish/sale",
      name:"publishSale",
      controller:"publishSaleCtrl"
    },
    //发布求购
    publishShopping:{
      templateUrl:"templates/publish/publish.html",
      url:"/publish/shop",
      name:"publishShopping",
      controller:"publishShoppingCtrl"
    }
  }
}


