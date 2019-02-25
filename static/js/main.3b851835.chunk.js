(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){e.exports=a(445)},183:function(e,t){},185:function(e,t){},206:function(e,t){},209:function(e,t){},304:function(e,t){},437:function(e,t,a){},440:function(e,t,a){},441:function(e,t,a){},442:function(e,t){e.exports={KERNEL_ADDRESS:"0x0F99bE6639B1DdFbEdf319B4de67E558a41AA6eA",KERNEL_ABI:[{constant:!1,inputs:[],name:"stop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_orderHash",type:"bytes32"},{name:"_value",type:"uint256"},{name:"_signature",type:"bytes"}],name:"repay",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"owner_",type:"address"}],name:"setOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_orderHash",type:"bytes32"}],name:"getExpectedRepayValue",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_config",type:"address"}],name:"setConfig",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kyberConnector",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"isDefaulted",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_account",type:"address"}],name:"getOrdersForAccount",outputs:[{name:"",type:"bytes32[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_orderHash",type:"bytes32"}],name:"getOrder",outputs:[{name:"_account",type:"address"},{name:"_byUser",type:"address"},{name:"_principalToken",type:"address"},{name:"_collateralToken",type:"address"},{name:"_principalAmount",type:"uint256"},{name:"_collateralAmount",type:"uint256"},{name:"_premium",type:"uint256"},{name:"_expirationTimestamp",type:"uint256"},{name:"_salt",type:"uint256"},{name:"_fee",type:"uint256"},{name:"_createdTimestamp",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"accountFactory",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_kyberConnector",type:"address"}],name:"setKyberConnector",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"accountToOrders",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"stopped",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"config",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"authority_",type:"address"}],name:"setAuthority",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getAllOrders",outputs:[{name:"",type:"bytes32[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"isRepaid",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"isOrder",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_feeWallet",type:"address"}],name:"setFeeWallet",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_reserve",type:"address"}],name:"setReserve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"orders",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_orderHash",type:"bytes32"},{name:"_principalPerCollateral",type:"uint256"}],name:"process",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_accountFactory",type:"address"}],name:"setAccountFactory",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"start",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"authority",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_orderAddresses",type:"address[4]"},{name:"_orderValues",type:"uint256[6]"},{name:"_signature",type:"bytes"}],name:"createOrder",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_escrow",type:"address"}],name:"setEscrow",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"hashToOrder",outputs:[{name:"account",type:"address"},{name:"byUser",type:"address"},{name:"principalToken",type:"address"},{name:"collateralToken",type:"address"},{name:"principalAmount",type:"uint256"},{name:"collateralAmount",type:"uint256"},{name:"premium",type:"uint256"},{name:"duration",type:"uint256"},{name:"expirationTimestamp",type:"uint256"},{name:"salt",type:"uint256"},{name:"fee",type:"uint256"},{name:"createdTimestamp",type:"uint256"},{name:"orderHash",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"reserve",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"escrow",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"feeWallet",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"VERSION",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_escrow",type:"address"},{name:"_accountFactory",type:"address"},{name:"_reserve",type:"address"},{name:"_feeWallet",type:"address"},{name:"_config",type:"address"},{name:"_kyberConnector",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"orderHash",type:"bytes32"},{indexed:!0,name:"account",type:"address"},{indexed:!0,name:"principalToken",type:"address"},{indexed:!1,name:"collateralToken",type:"address"},{indexed:!1,name:"byUser",type:"address"},{indexed:!1,name:"principalAmount",type:"uint256"},{indexed:!1,name:"collateralAmount",type:"uint256"},{indexed:!1,name:"premium",type:"uint256"},{indexed:!1,name:"expirationTimestamp",type:"uint256"},{indexed:!1,name:"fee",type:"uint256"}],name:"LogOrderCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"orderHash",type:"bytes32"},{indexed:!1,name:"valueRepaid",type:"uint256"}],name:"LogOrderRepaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"orderHash",type:"bytes32"},{indexed:!1,name:"reason",type:"string"}],name:"LogOrderDefaulted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"methodSig",type:"string"},{indexed:!1,name:"errMsg",type:"string"}],name:"LogError",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"bytes32Value",type:"bytes32"},{indexed:!1,name:"methodSig",type:"string"},{indexed:!1,name:"errMsg",type:"string"}],name:"LogErrorWithHintBytes32",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"addressValue",type:"address"},{indexed:!1,name:"methodSig",type:"string"},{indexed:!1,name:"errMsg",type:"string"}],name:"LogErrorWithHintAddress",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"authority",type:"address"}],name:"LogSetAuthority",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"}],name:"LogSetOwner",type:"event"},{anonymous:!0,inputs:[{indexed:!0,name:"sig",type:"bytes4"},{indexed:!0,name:"guy",type:"address"},{indexed:!0,name:"foo",type:"bytes32"},{indexed:!0,name:"bar",type:"bytes32"},{indexed:!1,name:"wad",type:"uint256"},{indexed:!1,name:"fax",type:"bytes"}],name:"LogNote",type:"event"}],RESERVE_ADDRESS:"0x64d14595152b430cf6940da15c6e39545c7c5b7e",RESERVE_ABI:[{constant:!1,inputs:[],name:"stop",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_token",type:"address"},{name:"_from",type:"address"},{name:"_value",type:"uint256"},{name:"_profit",type:"uint256"},{name:"_loss",type:"uint256"}],name:"lock",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"owner_",type:"address"}],name:"setOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"losses",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_dateTime",type:"address"}],name:"setDateTime",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_config",type:"address"}],name:"setConfig",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"reserves",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_orderAddresses",type:"address[3]"},{name:"_orderValues",type:"uint256[3]"},{name:"_signature",type:"bytes"}],name:"createOrder",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_account",type:"address"}],name:"getOrdersForAccount",outputs:[{name:"",type:"bytes32[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"profits",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_forToken",type:"address"},{name:"_token",type:"address"},{name:"_value",type:"uint256"}],name:"lockSurplus",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"orderToCumulative",outputs:[{name:"timestamp",type:"uint256"},{name:"value",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"dateTime",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"deposits",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_orderHash",type:"bytes32"},{name:"_forDays",type:"uint256"}],name:"updateOrderCumulativeValue",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_orderHash",type:"bytes32"}],name:"getOrder",outputs:[{name:"_account",type:"address"},{name:"_token",type:"address"},{name:"_byUser",type:"address"},{name:"_value",type:"uint256"},{name:"_expirationTimestamp",type:"uint256"},{name:"_salt",type:"uint256"},{name:"_createdTimestamp",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"deployTimestamp",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"accountFactory",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"withdrawals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"accountToOrders",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"stopped",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_orderHash",type:"bytes32"},{name:"_signature",type:"bytes"}],name:"cancelOrder",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"config",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"authority_",type:"address"}],name:"setAuthority",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getAllOrders",outputs:[{name:"",type:"bytes32[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"isOrder",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_token",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"release",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"lastReserveRuns",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"cancelledOrders",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_orderHash",type:"bytes32"}],name:"processOrder",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"orders",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_accountFactory",type:"address"}],name:"setAccountFactory",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_orderHashes",type:"bytes32[]"},{name:"_forDays",type:"uint256[]"}],name:"updateOrderCumulativeValueBatch",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"start",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"authority",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_escrow",type:"address"}],name:"setEscrow",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"hashToOrder",outputs:[{name:"account",type:"address"},{name:"token",type:"address"},{name:"byUser",type:"address"},{name:"value",type:"uint256"},{name:"duration",type:"uint256"},{name:"expirationTimestamp",type:"uint256"},{name:"salt",type:"uint256"},{name:"createdTimestamp",type:"uint256"},{name:"orderHash",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_forToken",type:"address"},{name:"_token",type:"address"},{name:"_value",type:"uint256"}],name:"transferSurplus",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"escrow",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TIME_INTERVAL",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_token",type:"address"},{name:"_forDays",type:"uint256"}],name:"updateReserveValues",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"VERSION",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[{name:"_escrow",type:"address"},{name:"_accountFactory",type:"address"},{name:"_dateTime",type:"address"},{name:"_config",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"orderHash",type:"bytes32"},{indexed:!0,name:"account",type:"address"},{indexed:!0,name:"token",type:"address"},{indexed:!1,name:"byUser",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"expirationTimestamp",type:"uint256"}],name:"LogOrderCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"orderHash",type:"bytes32"},{indexed:!0,name:"by",type:"address"}],name:"LogOrderCancelled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"token",type:"address"},{indexed:!0,name:"updatedTill",type:"uint256"},{indexed:!1,name:"reserve",type:"uint256"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"loss",type:"uint256"}],name:"LogReserveValuesUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"orderHash",type:"bytes32"},{indexed:!1,name:"updatedTill",type:"uint256"},{indexed:!1,name:"value",type:"uint256"}],name:"LogOrderCumulativeUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"token",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"by",type:"address"}],name:"LogRelease",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"token",type:"address"},{indexed:!0,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"profit",type:"uint256"},{indexed:!1,name:"loss",type:"uint256"},{indexed:!1,name:"by",type:"address"}],name:"LogLock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"forToken",type:"address"},{indexed:!0,name:"token",type:"address"},{indexed:!1,name:"from",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"LogLockSurplus",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"forToken",type:"address"},{indexed:!0,name:"token",type:"address"},{indexed:!1,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"LogTransferSurplus",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"methodSig",type:"string"},{indexed:!1,name:"errMsg",type:"string"}],name:"LogError",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"bytes32Value",type:"bytes32"},{indexed:!1,name:"methodSig",type:"string"},{indexed:!1,name:"errMsg",type:"string"}],name:"LogErrorWithHintBytes32",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"addressValue",type:"address"},{indexed:!1,name:"methodSig",type:"string"},{indexed:!1,name:"errMsg",type:"string"}],name:"LogErrorWithHintAddress",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"authority",type:"address"}],name:"LogSetAuthority",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"}],name:"LogSetOwner",type:"event"},{anonymous:!0,inputs:[{indexed:!0,name:"sig",type:"bytes4"},{indexed:!0,name:"guy",type:"address"},{indexed:!0,name:"foo",type:"bytes32"},{indexed:!0,name:"bar",type:"bytes32"},{indexed:!1,name:"wad",type:"uint256"},{indexed:!1,name:"fax",type:"bytes"}],name:"LogNote",type:"event"}],TOKEN_DATA:{"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359":{Symbol:"DAI",Decimals:18},"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2":{Symbol:"WETH",Decimals:18},"0x0D8775F648430679A709E98d2b0Cb6250d2887EF":{Symbol:"BAT",Decimals:18},"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2":{Symbol:"MKR",Decimals:18},"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599":{Symbol:"WBTC",Decimals:8},"0xE41d2489571d322189246DaFA5ebDe1F4699F498":{Symbol:"ZRX",Decimals:18},"0x1985365e9f78359a9B6AD760e32412f4a445E862":{Symbol:"REP",Decimals:18},"0xdd974D5C2e2928deA5F71b9825b8b646686BD200":{Symbol:"KNC",Decimals:18}}}},443:function(e,t,a){},444:function(e,t){e.exports={URL:"https://mainnet.infura.io/v3/33937fa262604241ab7063af759c81e5"}},445:function(e,t,a){"use strict";a.r(t);var n=a(160),s=a(161),i=a(164),p=a(162),o=a(51),u=a(165),r=a(1),y=a.n(r),d=a(163),m=a(29),c=a.n(m),l=a(18),b=a.n(l),f=a(53),v=(a(437),a(52));a(159),a(440);var x=function(e){e.app;var t=[];e.orders.forEach(function(e){t.push({account:e.account,user:e.user,created:e.createdTime,expires:e.expirationTime,collateralToken:e.collateralToken,collateralAmount:e.collateralAmount,principalToken:e.principalToken,principalAmount:e.principalAmount,premium:e.premium+"%",status:e.status})});var a=[{Header:"User",accessor:"user",maxWidth:100,Cell:function(e){return y.a.createElement("a",{href:"https://etherscan.com/address/"+e.value,target:"_blank",rel:"noopener noreferrer"},e.value)}},{Header:"Account",accessor:"account",maxWidth:100,Cell:function(e){return y.a.createElement("a",{href:"https://etherscan.com/address/"+e.value,target:"_blank",rel:"noopener noreferrer"},e.value)}},{Header:"Created",accessor:"created",className:"center"},{Header:"Collateral",accessor:"collateralAmount",className:"right"},{Header:"Token",accessor:"collateralToken"},{Header:"Principal",accessor:"principalAmount",className:"right"},{Header:"Token",accessor:"principalToken"},{Header:"Premium",accessor:"premium",maxWidth:100,className:"right"},{Header:"Expires",accessor:"expires",className:"center"},{Header:"Status",accessor:"status",maxWidth:100,Cell:function(e){return y.a.createElement("span",null,y.a.createElement("span",{style:{color:"Repaid"===e.value?"#3498db":"Active"===e.value?"#62cb31":"Default"===e.value?"#e74c3c":"#383838"}},"\u25cf")," ",e.value)}}];return y.a.createElement("div",{className:"OrdersTable"},y.a.createElement("p",null,y.a.createElement("b",null,"Loans:")),y.a.createElement(v.a,{data:t,columns:a,showPageSizeOptions:!1,className:"-striped",resizable:!1}))};a(441);var _=function(e){e.app;var t=e.reserves,a=[];return t.forEach(function(e){a.push({token:e.token,balance:e.balance>0?parseFloat(e.balance.toFixed(4)):0,lastUpdated:e.lastUpdated,activeLoanTotal:e.activeLoanTotal,expectedPremiumRepay:e.expectedPremiumRepay,currentROI:e.currentROI})}),y.a.createElement("div",{className:"ReservesTable"},y.a.createElement("p",null,y.a.createElement("b",null,"Reserves:")),y.a.createElement(v.a,{data:a,columns:[{Header:"Token",accessor:"token"},{Header:"Last Updated",accessor:"lastUpdated",className:"center"},{Header:"Balance",accessor:"balance",className:"right"},{Header:"Active Loan Total",accessor:"activeLoanTotal",className:"right"},{Header:"Expected Premium Repay",accessor:"expectedPremiumRepay",className:"right"},{Header:"Current ROI",accessor:"currentROI",className:"right"}],defaultPageSize:8,showPageSizeOptions:!1,showPagination:!1,className:"-striped",resizable:!1}))};var h=function(e){return y.a.createElement("div",null,y.a.createElement("p",null,y.a.createElement("a",{href:"https://github.com/conlan/nuo-stats",target:"_blank",rel:"noopener noreferrer"},"Github")," ","|"," ",y.a.createElement("a",{href:"https://app.nuo.network",target:"_blank",rel:"noopener noreferrer"},"Nuo")))},g=a(442),w=[],M=[],E={},T=null,A=null,k="",O={},R={};function D(e){return g.TOKEN_DATA[e].Symbol}function S(e){return g.TOKEN_DATA[e].Decimals}function C(e){var t=new Date(1e3*e),a=t.getUTCMonth()+1;a<10&&(a="0"+a);var n=t.getUTCDate();return n<10&&(n="0"+n),a+"-"+n+"-"+t.getUTCFullYear()}function L(){return(L=Object(f.a)(b.a.mark(function e(){var t,a,n,s,i,p,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=new T.eth.Contract(g.RESERVE_ABI,g.RESERVE_ADDRESS),a=Object.keys(g.TOKEN_DATA),M=[],n=0;case 4:if(!(n<a.length)){e.next=22;break}return s=a[n],k="(Fetching reserve details for "+D(s)+")",e.next=9,t.methods.lastReserveRuns(s).call();case 9:return i=e.sent,e.next=12,t.methods.reserves(i,s).call();case 12:p=e.sent,p/=Math.pow(10,g.TOKEN_DATA[s].Decimals),o={token:g.TOKEN_DATA[s].Symbol,balance:p,lastUpdated:C(i),lastUpdatedTimestamp:i,activeLoanTotal:"-",expectedPremiumRepay:"-",currentROI:"-"},console.log(o),M.push(o),E[g.TOKEN_DATA[s].Symbol]=o,A.setState({});case 19:n++,e.next=4;break;case 22:A.setState({}),F();case 24:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(){return H.apply(this,arguments)}function H(){return(H=Object(f.a)(b.a.mark(function e(){var t,a,n,s,i,p,o,u,r,y,d,m,c,l,f,v,x;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new T.eth.Contract(g.KERNEL_ABI,g.KERNEL_ADDRESS),e.next=3,t.methods.getAllOrders().call();case 3:(a=e.sent).reverse(),console.log("Received "+a.length+" orders"),w=[],n=0;case 8:if(!(n<a.length)){e.next=34;break}return s=a[n],k="(Fetching loan details "+(n+1)+" / "+a.length+")",e.next=13,t.methods.getOrder(s).call();case 13:i=e.sent,"("+n+" / "+a.length+")",p=i._createdTimestamp,o=C(p),u=i._expirationTimestamp,r=C(u),y=i._collateralToken,d=S(y),m=parseFloat((i._collateralAmount/Math.pow(10,d)).toFixed(4)),c=i._principalToken,l=D(c),f=S(c),v=parseFloat((i._principalAmount/Math.pow(10,f)).toFixed(4)),x=(i._premium/1e17*100).toFixed(2),l in O==0&&(O[l]=0,R[l]=0),w.push({id:s,account:i._account,user:i._byUser,collateralAmount:m,collateralToken:D(y),createdTime:o,expirationTime:r,rawExpirationTime:u,premium:x,principalAmount:v,principalToken:l,status:"-",isActive:!1}),A.setState({}),console.log(i);case 31:n++,e.next=8;break;case 34:k="",A.setState({}),N();case 37:case"end":return e.stop()}},e)}))).apply(this,arguments)}function N(){return U.apply(this,arguments)}function U(){return(U=Object(f.a)(b.a.mark(function e(){var t,a,n,s,i,p;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=new T.eth.Contract(g.KERNEL_ABI,g.KERNEL_ADDRESS),a=0;case 2:if(!(a<w.length)){e.next=19;break}return n=w[a],k="(Fetching loan status "+(a+1)+" / "+w.length+")",e.next=7,t.methods.isRepaid(n.id).call();case 7:if(s=e.sent,i=!1,!1!==s){e.next=13;break}return e.next=12,t.methods.isDefaulted(n.id).call();case 12:i=e.sent;case 13:n.status=s?"Repaid":i?"Default":"Active",0==s&&0==i&&(O[n.principalToken]=O[n.principalToken]+n.principalAmount,p=n.premium/100*n.principalAmount,R[n.principalToken]=R[n.principalToken]+p,Object.keys(O).forEach(function(e){var t=O[e].toFixed(4);t>0&&(E[e].activeLoanTotal=t);var a=R[e].toFixed(4);a>0&&(E[e].expectedPremiumRepay=a);var n=a/E[e].balance.toFixed(4);n=(100*n).toFixed(2),a>0&&(E[e].currentROI=n+"%")})),A.setState({});case 16:a++,e.next=2;break;case 19:k="",A.setState({});case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=function(e){A=e.app;var t=Object(m.useWeb3Context)();return void 0===t.connectorName?void 0===window.web3?t.setConnector("Infura"):t.setConnector("MetaMask"):null===T&&(T=t.library,function(){L.apply(this,arguments)}()),y.a.createElement("div",null,y.a.createElement("p",null,y.a.createElement("i",null,k)),y.a.createElement(_,{reserves:M}),y.a.createElement(x,{orders:w}),y.a.createElement(h,null))},I=(a(443),a(444)),V=m.Connectors.MetaMaskConnector,K=m.Connectors.NetworkOnlyConnector,W={MetaMask:new V,Infura:new K({providerURL:I.URL})},j=null,P=function(e){function t(){var e;return Object(n.a)(this,t),e=Object(i.a)(this,Object(p.a)(t).call(this)),j=Object(o.a)(e),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return y.a.createElement(c.a,{connectors:W,libraryName:"web3.js"},y.a.createElement(B,{app:j}))}}]),t}(r.Component),z=document.getElementById("root");Object(d.render)(y.a.createElement(P,null),z)}},[[166,1,2]]]);
//# sourceMappingURL=main.3b851835.chunk.js.map