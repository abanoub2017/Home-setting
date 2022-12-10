<template>
  <div>
    <!-- <pre lang="json"
      >{{
        JSON.stringify({
          coords: {
            accuracy: coords.accuracy,
            latitude: coords.latitude,
            longitude: coords.longitude,
            altitude: coords.altitude,
            altitudeAccuracy: coords.altitudeAccuracy,
            heading: coords.heading,
            speed: coords.speed,
          },
          locatedAt,
          error: error ? error.message : error,
        })
      }}
    </pre> -->
  </div>
</template>
    
<script setup lang="ts">
import { useGeolocation } from "@vueuse/core";

const { coords, locatedAt, error } = useGeolocation();
</script>
    
<style scoped>
</style>
    