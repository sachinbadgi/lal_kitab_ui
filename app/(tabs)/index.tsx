import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Activity, Dumbbell, Salad, Moon, Star, Sun } from 'lucide-react-native';
import { LineChart } from 'react-native-chart-kit';

export default function HealthScreen() {
  const healthScore = 75;
  const chartData = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        data: [75, 82, 78, 85, 88, 92],
      },
    ],
  };

  const astrologicalEvents = [
    {
      date: 'March 2025',
      event: 'Jupiter in your health house - Excellent time for starting new fitness routines',
      impact: 'Positive',
    },
    {
      date: 'September 2025',
      event: 'Saturn transition - Focus on chronic health issues',
      impact: 'Challenging',
    },
    {
      date: 'December 2025',
      event: 'Venus-Mars conjunction - Increased energy and vitality',
      impact: 'Positive',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Health Forecast</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Current Health Potential</Text>
          <Text style={styles.score}>{healthScore}%</Text>
        </View>
      </View>

      <View style={styles.astroContainer}>
        <View style={styles.astroHeader}>
          <Star size={24} color="#6366f1" />
          <Text style={styles.astroTitle}>Astrological Influence</Text>
        </View>
        <Text style={styles.astroText}>
          Mars in your 6th house indicates increased energy and motivation for health initiatives.
          Jupiter's beneficial aspect suggests excellent potential for healing and recovery.
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>5-Year Health Forecast</Text>
        <LineChart
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
        <Text style={styles.eventsTitle}>Upcoming Astrological Events</Text>
        {astrologicalEvents.map((event, index) => (
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
          <Activity size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Exercise</Text>
          <Text style={styles.metricValue}>30 min today</Text>
          <Text style={styles.metricForecast}>Best time: Morning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <Dumbbell size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Strength</Text>
          <Text style={styles.metricValue}>2/3 workouts</Text>
          <Text style={styles.metricForecast}>Focus: Core training</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <Salad size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Nutrition</Text>
          <Text style={styles.metricValue}>1800 kcal</Text>
          <Text style={styles.metricForecast}>Avoid: Dairy today</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <Moon size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Sleep</Text>
          <Text style={styles.metricValue}>7.5 hours</Text>
          <Text style={styles.metricForecast}>Best time: 10:30 PM</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Astrological Health Tips</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Mercury retrograde: Focus on reviewing and adjusting health routines</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Full moon approaching: Maintain regular sleep schedule</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Venus influence: Beneficial time for beauty treatments and self-care</Text>
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
  chartContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 12,
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