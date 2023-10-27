/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CardItemProps {
  title: string;
  description: string;
  origin: string;
  life_span: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  origin,
  life_span,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.showDetailButton}
          onPress={toggleExpand}
        >
          <Text style={styles.showDetailText}>
            {expanded ? 'Hide Detail' : 'Show Detail'}
          </Text>
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={styles.cardContent}>
          <Text>
            <Text style={styles.boldText}>Origin:</Text> {origin}
          </Text>
          <Text>
            <Text style={styles.boldText}>Life Span:</Text> {life_span}
          </Text>
          <Text>
            <Text style={styles.boldText}>Description:</Text> {description}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 18,
    marginTop: 8,
  },
  showDetailButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  showDetailText: {
    color: 'white',
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default CardItem;
