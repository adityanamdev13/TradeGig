import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PortfolioChart from '../components/charts/PortfolioChart';
import FilterBarDashBoard from '../components/FilterBarDashBoard';
import P2D from '../components/charts/P2D';
import BarCharts from '../components/charts/BarCharts';
import Hitmap from '../components/charts/Hitmap';
import CumulativeRealised from '../components/charts/CumulativeRealised';
import CumulativeBarChart from '../components/charts/CumulativeBarChart';
import NegativeP2D from '../components/charts/NegativeP2D';
import CapitalAllocation from '../components/charts/CapitalAllocation';
import AdvisorShowdown from '../components/charts/AdvisorShowdown';
import Chart32 from '../components/charts/Chart32';
import Chart20 from '../components/charts/Chart20';

const DashBoard = () => {
  const scrollY = new Animated.Value(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <FilterBarDashBoard />

        <Text style={styles.title}>
          1.Portfolio Value & Portfolio Value Change %
        </Text>
        <PortfolioChart title="Portfolio Change %" />
        <P2D title="Portfolio %" />

        <Text style={styles.title}>2. Portfolio S/L & Target Distances</Text>
        <BarCharts title="S/L & Target" />

        <Text style={styles.title}>3. Live Trade Hitmap P/L</Text>
        <Hitmap title="Live Trade" />

        <Text style={styles.title}>4.Total Assets Deployed & % Change</Text>
        <P2D title="Total Assets Deployed" />

        <Text style={styles.title}>5.#of Live Trades & P/L</Text>
        <P2D title="#of Live Trades" />

        <Text style={styles.title}>
          6.Cumulative Realised P/L & Cumulative Realised P/L % Change
        </Text>
        <CumulativeRealised title="Cumulative PL%" />

        <Text style={styles.title}>7.Returns %/day & Risk Free Returns %</Text>
        <PortfolioChart title="Returns /%day" />

        <Text style={styles.title}>
          8. Recommanded Buy Price Vs Actual Buy Price
        </Text>
        <P2D title="Buy price %" />

        <Text style={styles.title}>
          9. SL Vs Target Vs Buy Vs Sell Vs Recommanded Sell Price
        </Text>
        <NegativeP2D title="Recommended to sell" />

        <Text style={styles.title}>10.Modified Sharpe Ratio</Text>
        <PortfolioChart title="Pe Ratio" />

        <Text style={styles.title}>
          11.Cumulative Realised PL & PL % Change
        </Text>
        <CumulativeBarChart title={'Cumulative Realised PL & PL % Change'} />

        <Text style={styles.title}>
          12.Capital Allocation Vs Different Advisors
        </Text>
        <CapitalAllocation title="Advisors" />

        <Text style={styles.title}>13.Trade with Max #of Days Held</Text>
        <PortfolioChart title="Days Held" color={`['#ffaa32']`} />

        <Text style={styles.title}>14. Average Time in Market Deep Five</Text>
        <CumulativeBarChart title={'Monthly Revenue Growth'} colors={"['#FFA500', '#FFA500', '#00FFFF', '#FF69B4', '#FF69B4', '#FF69B4']"}/>

        <Text style={styles.title}>15.Cumulative Fixed Costs</Text>
        <PortfolioChart title="New Chart" color={`['#ffaa32']`} />

        <Text style={styles.title}>16. CMAY Be Combined With Graphs</Text>
        <Hitmap title="Live Trade" />

        <Text style={styles.title}>17. Gross VS Net P/L</Text>
        <NegativeP2D title="Grross vs Net P/L%" />

        <Text style={styles.title}>18.Gross P/L VS Ner P/L</Text>
        <P2D
          title="W/L Ratio: Cumulative P/L %"
          color={`['#debd05','#00bfff']`}
        />
        <Text style={styles.title}>19.Advisor Showdown</Text>
        <AdvisorShowdown  title={"Advisor Showdown"} />

        <Text style={styles.title}>20. Frequency Distr. of Time of Trade</Text>
       <Chart20 title={"Average High & Low Temperature"}/>
       
        <Text style={styles.title}>
          21. % Diffrences Betweeen Buy Price & Market Price At Recommanded Time
        </Text>
        <NegativeP2D title="Time to Buy Action" />

        <Text style={styles.title}>
          22. Time To Sell Action
        </Text>
        <NegativeP2D title="For Sell" />

        <Text style={styles.title}>
          23. Avg Buy Value
        </Text>
        <NegativeP2D title="For Sell" />

        <Text style={styles.title}>24. Modified Sort No Ratio</Text>
        <P2D title="W/L Ratio: Cumulative P/L %" />

        <Text style={styles.title}>
        25. Profiit Factor
        </Text>
        <PortfolioChart title="Profiit Factor"  marker={false} color={`['#FF0000']`} />

        <Text style={styles.title}>
        26. W/L, Profit Factor, TG Ratio
        </Text>
        <CapitalAllocation title="W/L Ratio" />
        
      
        <Text style={styles.title}>
        27. Expectancy Per Rupee
        </Text>
        <PortfolioChart title="Expectancy Per Rupee"  marker={false} color={`['#FF0000']`} />

        <Text style={styles.title}>
        28. Expectancy Per Trade
        </Text>
        <PortfolioChart title="Expectancy Per Trade"  marker={false} color={`['#FF0000']`} />


        <Text style={styles.title}>
        29.  Max Drawdown
        </Text>
        <PortfolioChart title="Max Drawdown"  marker={false} color={`['#FF0000']`} />


        <Text style={styles.title}>30.Fixed Costs % of Gross Profit</Text>
        <PortfolioChart title="Fixed Cost % of Gross Profit" />

        <Text style={styles.title}>
          31.Win/Loss Rs., Win/loss %, Win/Loss %/day, Days Held
        </Text>
        <Hitmap title="Biggest Winners & Losers" />

        <Text style={styles.title}>
          32.Winning & Losing Sreak
        </Text>
       <Chart32 title={"Winners & Losers"}/>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    backgroundColor: '#11150f',
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
