import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Users, MessageCircle, Calendar, Clock, Star, Sun } from 'lucide-react-native';

export default function RelationshipsScreen() {
  const relationshipScore = 82;

  const chartData = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        data: [82, 85, 88, 92, 95, 98],
      },
    ],
  };

  const relationshipEvents = [
    {
      date: 'May 2025',
      event: 'Venus in 7th house - Excellent for romantic relationships and partnerships',
      impact: 'Positive',
    },
    {
      date: 'July 2025',
      event: 'Mars-Venus square - Navigate relationship challenges with patience',
      impact: 'Challenging',
    },
    {
      date: 'October 2025',
      event: 'Jupiter trine Venus - Expansion in social circle and deep connections',
      impact: 'Positive',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Relationship Forecast</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Connection Potential</Text>
          <Text style={styles.score}>{relationshipScore}%</Text>
        </View>
      </View>

      <View style={styles.astroContainer}>
        <View style={styles.astroHeader}>
          <Star size={24} color="#6366f1" />
          <Text style={styles.astroTitle}>Relationship Astrology</Text>
        </View>
        <Text style={styles.astroText}>
          Venus in your 7th house brings harmony and attraction to relationships.
          Jupiter's influence suggests expansion in your social circle and deeper connections.
        </Text>
      </View>

      <View style={styles.connectionsContainer}>
        <Text style={styles.sectionTitle}>Close Connections</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.connectionsList}>
          {[1, 2, 3, 4].map((_, index) => (
            <TouchableOpacity key={index} style={styles.connectionCard}>
              <Image
                source={{ uri: `https://source.unsplash.com/random/100x100?portrait=${index}` }}
                style={styles.connectionImage}
              />
              <Text style={styles.connectionName}>John Doe</Text>
              <Text style={styles.lastContact}>2 days ago</Text>
              <Text style={styles.compatibility}>98% Compatible</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.eventsContainer}>
        <Text style={styles.eventsTitle}>Relationship Transits</Text>
        {relationshipEvents.map((event, index) => (
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
          <Users size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Connections</Text>
          <Text style={styles.metricValue}>15 close friends</Text>
          <Text style={styles.metricForecast}>Growing period ahead</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <MessageCircle size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Communication</Text>
          <Text style={styles.metricValue}>25 this week</Text>
          <Text style={styles.metricForecast}>Mercury direct favors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <Calendar size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Social Events</Text>
          <Text style={styles.metricValue}>3 planned</Text>
          <Text style={styles.metricForecast}>Venus brings harmony</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.metricCard}>
          <Clock size={24} color="#6366f1" />
          <Text style={styles.metricTitle}>Quality Time</Text>
          <Text style={styles.metricValue}>5 hrs/week</Text>
          <Text style={styles.metricForecast}>Increase recommended</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Astrological Relationship Tips</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Venus retrograde: Focus on rekindling old connections</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Mars transit: Be patient in communications</Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>Jupiter influence: Excellent for networking and social expansion</Text>
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
  connectionsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 15,
  },
  connectionsList: {
    flexDirection: 'row',
  },
  connectionCard: {
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  connectionImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  connectionName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1e293b',
  },
  lastContact: {
    fontSize: 12,
    color: '#64748b',
  },
  compatibility: {
    fontSize: 12,
    color: '#10b981',
    marginTop: 4,
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