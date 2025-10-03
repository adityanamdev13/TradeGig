import ChartForAccordion from "../components/charts/ChartForAccordion";
import LogTradeCard from "../components/LogTradeCard";

export const TradeTabData = [
    {
        id: 1,
        imgUri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/streetgains%201.png',
        name: 'Streetgains'
    },
    {
        id: 2,
        imgUri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/trading-view%201.png',
        name: 'Tradingview'
    },{
        id: 3,
        imgUri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/univest%201.png',
        name: 'Univest'
    },{
        id: 4,
        imgUri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/waya%201.png',
        name: 'Waya'
    },{
        id: 5,
        imgUri: 'https://demo.geektheo.in/tradegig/assets/images/advisors/xu9itmmev2qgzg10offz%201.png',
        name: 'Liquide'
    },
];


export  const accordionData = [
    {
      title: 'Today 17 OCT',
      content: (
        <>
          <LogTradeCard />
          <LogTradeCard badgeTitle="Stoploss Hit"
          bgColor='#e51717' />
        </>
      ),
    },
    {
      title: 'Yesterday 16 OCT',
      content: (
        <>
          <LogTradeCard />
          <LogTradeCard badgeTitle="Unplanned Exit"
          bgColor='#e51717' />
        </>
      ),
    },
    {
      title: '15 OCT',
      content: (
        <>
          <LogTradeCard />
          <LogTradeCard badgeTitle="Stoploss Hit"
          bgColor='#e51717' />
        </>
      ),
    }, 
    {
      title: '14 OCT',
      content: (
        <>
          <LogTradeCard badgeTitle="Stoploss Hit"
          bgColor='#e51717' />
          <LogTradeCard  />
        </>
      ),
    },
    {
      title: '13 OCT',
      content: (
        <>
          <LogTradeCard />
          <LogTradeCard badgeTitle="Stoploss Hit"
          bgColor='#e51717' />
        </>
      ),
    }, 
    {
      title: 'SEP',
      content: (
        <>
          <LogTradeCard badgeTitle="Unplanned Exit"
          bgColor='#e51717' />
          <LogTradeCard badgeTitle="Stoploss Hit"
          bgColor='#e51717' />
        </>
      ),
    }, 
    {
      title: 'AUG',
      content: (
        <>
          <LogTradeCard badgeTitle="Stoploss Hit"
          bgColor='#e51717' />
          <LogTradeCard  />
        </>
      ),
    }
  ];

  export  const accordionDataForPosition = [
    {
      title: '100% Target/Stoploss',
      content: (
        <>
          <ChartForAccordion/>
        </>
      ),
    }
  ];

 export const sampleDataForTradelogTable = [
    {
      id: 1,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 2,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 3,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 4,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 5,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    },  {
      id: 6,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 7,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 8,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 9,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 10,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    },   {
      id: 11,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 12,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 13,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 14,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, {
      id: 15,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    },  {
      id: 16,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    },  {
      id: 17,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    },  {
      id: 18,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    },  {
      id: 19,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    },  {
      id: 20,
      name: 'NSE:COALINDIA',
      platform: 'Liquide',
      dateBought: '03/05/2024',
      unitsBought: 10,
      buyPrice: 474.75,
      fixedCost: 1,
      broker: 'Zerodha',
      sl: 1,
      target: 1,
      targetId: 'dngdahsrbh152468',
      totalBuyIn: 4774.00,
      currentAssetValue: 4555.00,
    }, 
  ];