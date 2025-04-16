import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Wallet, PiggyBank, CreditCard, ChartLine as LineChart, Star, Sun } from 'lucide-react-native';
import { LineChart as Chart } from 'react-native-chart-kit';

export default function WealthScreen() {
  const wealthScore = 68;
  const chartData = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        data: [25000, 35000, 42000, 55000, 72000, 95000],
      },
    ],
  };

  const financialEvents = [
    {
      date: 'April 2025',
      event: 'Jupiter-Venus conjunction - Excellent for investments and financial growth',
      impact: 'Positive',
    },
    {
      date: 'August 2025',
      event: 'Mercury retrograde - Review and reassess financial strategies',
      impact: 'Challenging',
    },
    {
      date: 'November 2025',
      event: 'Saturn direct - Long-term investments bear fruit',
      impact: 'Positive',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wealth Forecast</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Financial Potential</Text>
          <Text style={styles.score}>{wealthScore}%</Text>
        </View>
      </View>

      <View style={styles.astroContainer}>
        <View style={styles.astroHeader}>
          <Star size={24} color="#6366f1" />
          <Text style={styles.astroTitle}>Financial Astrology</Text>
        </View>
        <Text style={styles.astroText}>
          Jupiter in your 2nd house of wealth suggests significant financial opportunities.
          Venus aspects indicate favorable conditions for investments and passive income.
        </Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Projected Net Worth</Text>
        <Text style={styles.balanceAmount}>$95,000</Text>
        <Text style={styles.balanceChange}>+280% growth by 2030</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>5-Year Wealth Projection</Text>
        <Chart
          data={chartData}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(99, 102, 241, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
      </View>

      <View style={styles.eventsContainer}>
        <Text style={styles.eventsTitle}>Financial Transits & Events</Text>
        {financialEvents.map((event, index) => (
          <View key={index} style={styles.eventCard}>
            <View style={styles.eventHeader}>
              <Sun size={20} color="#6366f1" />
              <Text style={styles.eventDate}>{event.date}</Text>
            </View>
            <Text style={styles.eventText}>{event.event}</Text>
            <Text style={[
              styles.eventImpact,
              { color: event.impact === 'Positive' ? '#10b981' : '#ef4444' }
            ]}>
              {event.impact} Period
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.metricsContainer}>
        <TouchableOpacity style={styles.metricCard}>
          <Wallet size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Income</Text>
          <Text style={styles.metricValue}>$4,500/mo</Text>
          <Text style={styles.metricForecast}>+15% growth potential</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <PiggyBank size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Savings</Text>
          <Text style={styles.metricValue}>$800/mo</Text>
          <Text style={styles.metricForecast}>Best month: October</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <CreditCard size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Expenses</Text>
          <Text style={styles.metricValue}>$3,200/mo</Text>
          <Text style={styles.metricForecast}>Review in Mercury Rx</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <LineChart size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Investments</Text>
          <Text style={styles.metricValue}>$500/mo</Text>
          <Text style={styles.metricForecast}>Jupiter favors stocks</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Astrological Financial Tips</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>New Moon phase: Ideal for starting new investments</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Venus direct: Favorable for real estate decisions</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Saturn influence: Focus on long-term financial planning</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  scoreContainer: {
    marginTop: 10,
  },
  scoreText: {
    fontSize: 16,
    color: '#64748b',
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  astroContainer: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  astroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  astroTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginLeft: 10,
  },
  astroText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  balanceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  balanceTitle: {
    fontSize: 16,
    color: '#64748b',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 4,
  },
  balanceChange: {
    fontSize: 14,
    color: '#10b981',
    marginTop: 4,
  },
  chartContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  eventsContainer: {
    padding: 20,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 15,
  },
  eventCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  eventHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginLeft: 8,
  },
  eventText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  eventImpact: {
    fontSize: 14,
    fontWeight: '500',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  metricCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    width: '48%',
    marginVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  metricTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
    marginTop: 8,
  },
  metricValue: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  metricForecast: {
    fontSize: 12,
    color: '#6366f1',
    marginTop: 4,
    fontStyle: 'italic',
  },
  tipsContainer: {
    padding: 20,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 10,
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  tipText: {
    fontSize: 14,
    color: '#64748b',
  },
});