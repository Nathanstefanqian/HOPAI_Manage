const a={ENABLE:0,DISABLE:1},e={DIR:1,MENU:2,BUTTON:3},t={ALL:1,DEPT_CUSTOM:2,DEPT_ONLY:3,DEPT_AND_CHILD:4,DEPT_SELF:5},s={DINGTALK:{title:"钉钉",type:20,source:"dingtalk",img:"https://s1.ax1x.com/2022/05/22/OzMDRs.png"},WECHAT_ENTERPRISE:{title:"企业微信",type:30,source:"wechat_enterprise",img:"https://s1.ax1x.com/2022/05/22/OzMrzn.png"}},m={INIT:0,NORMAL:1,STOP:2},n={INIT:0,DONE:1,IGNORE:2},E={WX_PUB:{code:"wx_pub",name:"微信 JSAPI 支付"},WX_LITE:{code:"wx_lite",name:"微信小程序支付"},WX_APP:{code:"wx_app",name:"微信 APP 支付"},WX_BAR:{code:"wx_bar",name:"微信条码支付"},ALIPAY_PC:{code:"alipay_pc",name:"支付宝 PC 网站支付"},ALIPAY_WAP:{code:"alipay_wap",name:"支付宝 WAP 网站支付"},ALIPAY_APP:{code:"alipay_app",name:"支付宝 APP 支付"},ALIPAY_QR:{code:"alipay_qr",name:"支付宝扫码支付"},ALIPAY_BAR:{code:"alipay_bar",name:"支付宝条码支付"},MOCK:{code:"mock",name:"模拟支付"}},A={URL:{mode:"url"},IFRAME:{mode:"iframe"},FORM:{mode:"form"},QR_CODE:{mode:"qr_code"},APP:{mode:"app"}},p={WAITING:{status:0,name:"未支付"},SUCCESS:{status:10,name:"已支付"},CLOSED:{status:20,name:"未支付"}},I={RECYCLE:{status:-1,name:"回收站"},DISABLE:{status:0,name:"下架"},ENABLE:{status:1,name:"上架"}},P={DATE:{type:1,name:"固定日期可用"},TERM:{type:2,name:"领取之后可用"}},_={USER:{type:1,name:"直接领取"},ADMIN:{type:2,name:"指定发放"},REGISTER:{type:3,name:"新人券"}},D={ALL:{scope:1,name:"通用劵"},SPU:{scope:2,name:"商品劵"},CATEGORY:{scope:3,name:"品类劵"}},L={PRICE:{type:10,name:"满 N 元"},COUNT:{type:20,name:"满 N 件"}},T={PRICE:{type:1,name:"满减"},PERCENT:{type:2,name:"折扣"}},R={ORDER:{type:1,name:"获得推广佣金"},WITHDRAW:{type:2,name:"提现申请"}},o={AUDITING:{status:0,name:"审核中"},AUDIT_SUCCESS:{status:10,name:"审核通过"},AUDIT_FAIL:{status:20,name:"审核不通过"},WITHDRAW_SUCCESS:{status:11,name:"提现成功"},WITHDRAW_FAIL:{status:21,name:"提现失败"}},C={WALLET:{type:1,name:"钱包"},BANK:{type:2,name:"银行卡"},WECHAT:{type:3,name:"微信"},ALIPAY:{type:4,name:"支付宝"}},y={EXPRESS:{type:1,name:"快递发货"},PICK_UP:{type:2,name:"到店自提"}},N={UNPAID:{status:0,name:"待支付"},UNDELIVERED:{status:10,name:"待发货"},DELIVERED:{status:20,name:"已发货"},COMPLETED:{status:30,name:"已完成"},CANCELED:{status:40,name:"已取消"}};export{R as B,a as C,y as D,n as I,p as P,s as S,N as T,A as a,E as b,m as c,I as d,T as e,P as f,_ as g,D as h,L as i,C as j,o as k,e as l,t as m};