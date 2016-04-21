/**
 * Created by Administrator on 2016/4/21.
 */

var config = {
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
    }
  },
  loading:{
    templateUrl:"templates/loading/loading.html",
  },
  controllers:{
    tabs:{
      templateUrl:"templates/tabs/hm-tabs.html",
      url:"/tabs",
      name:"tabs"
    },
    tabsHome:{
      templateUrl:"templates/tabs/hm-tabs-home.html",
      url:"/home",
      name:"tabs.home",
      controller:"HomeCtrl"
    },
    tabsShopping:{
      templateUrl:"templates/tabs/hm-tabs-shopping.html",
      url:"/shopping",
      name:"tabs.shopping",
      controller:"ShoppingCtrl"
    },
    tabsMessage:{
      templateUrl:"templates/tabs/hm-tabs-message.html",
      url:"/message",
      name:"tabs.message",
      controller:"MsgCtrl"
    },
    tabsPersonal:{
      templateUrl:"templates/tabs/hm-tabs-personal.html",
      url:"/personal",
      name:"tabs.personal",
      controller:"PersonalCtrl"
    }
  }
}


