// SleepTrackerScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSleepData, updateSleepData } from '../../../redux/actions/sleepActions';

const SleepTrackerScreen = () => {
  const dispatch = useDispatch();
  const totalHoursSlept = useSelector((state) => state.sleep.hoursSlept);

  const [timeWentToBed, setTimeWentToBed] = useState(new Date());
  const [timeWokeUp, setTimeWokeUp] = useState(new Date());
  const [selectedPickerType, setSelectedPickerType] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSleepData();
        // Handle the data as needed
        console.log('Sleep data:', data);
      } catch (error) {
        // Handle errors
        console.error('Error fetching sleep data:', error);
      }
    };

    fetchData(); // Call the fetch function on mount
  }, []);

  const submitSleepData = async () => {
    const newHours = calculateHoursSlept();
    try {
      await updateSleepData(newHours);
      // Optionally, you may want to perform other actions here
    } catch (error) {
      // Handle errors
      console.error('Error updating sleep data:', error);
    }
  };

  const calculateHoursSlept = () => {
    const totalMinutesSlept = (timeWokeUp.getTime() - timeWentToBed.getTime()) / (1000 * 60);
    const hours = totalMinutesSlept / 60;
    return hours < 0 ? hours + 24 : hours.toFixed(2);
  };

  const formatTime = (date) => {
    return moment(date).format('h:mm A');
  };

  const handleTimeChange = (event, selectedDate) => {
    setShowTimePicker(false);
    if (selectedPickerType === 'timeWentToBed') {
      setTimeWentToBed(selectedDate || timeWentToBed);
    } else if (selectedPickerType === 'timeWokeUp') {
      setTimeWokeUp(selectedDate || timeWokeUp);
    }
  };

  const showTimepicker = (type) => {
    setShowTimePicker(true);
    setSelectedPickerType(type);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time you went to bed:</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:mm"
          value={formatTime(timeWentToBed)}
          onTouchStart={() => showTimepicker('timeWentToBed')}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Time you woke up:</Text>
        <TextInput
          style={styles.input}
          placeholder="HH:mm"
          value={formatTime(timeWokeUp)}
          onTouchStart={() => showTimepicker('timeWokeUp')}
        />
      </View>

      {/* Time Picker */}
      {showTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedPickerType === 'timeWentToBed' ? timeWentToBed : timeWokeUp}
          mode="time"
          is24Hour={false}
          display="spinner"
          onChange={handleTimeChange}
        />
      )}

      {/* Total Hours Slept */}
      <Text style={styles.totalHours}>Total Hours Slept: {totalHoursSlept} hours</Text>

      {/* Submit button */}
      <Button title="Submit" onPress={submitSleepData} />
    </ScrollView>
  );
};

const styles = {
  container: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
  },
  totalHours: {
    marginTop: 10,
    fontSize: 18,
  },
};

export default SleepTrackerScreen;
