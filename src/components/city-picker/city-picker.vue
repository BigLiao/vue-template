<style lang="less">

</style>

<template>
  <div class="by-city-picker">
    <!-- <Popup
      v-model="popupValue"
      position="bottom"
    > -->
      <Picker :slots="citySlots" @change="onValuesChange" valueKey="name">
        <button>confirm</button>
        <button>cancel</button>
      </Picker>
    <!-- </Popup> -->
  </div>
</template>

<script>
import cityData from './city.json';
import { Picker, Popup } from 'mint-ui';
function initCitySlots(data) {

}

export default {
  name: 'by-city-picker',
  components: {
    Picker, Popup
  },
  props: {},
  data() {
    return {
      popupValue: true,
      citySlots: [
        {
          flex: 1,
          values: [],
          className: 'slot1',
          textAlign: 'center'
        }, {
          flex: 1,
          values: [],
          className: 'slot2',
          textAlign: 'center'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    };
  },
  mounted() {
    this.initSlots();
  },
  methods: {
    onValuesChange(picker, values) {
      // if (!values[0] || !values[0].state || !values[1].city) {
      //   return;
      // }
      console.log(values);
      if (values[0].state[0] && !values[0].state[0].id) {
        // 省份为空的情况
        console.log('省份为空');
        const contryId = values[0].id;
        const contry = cityData.find(item => item.id === contryId);
        const provinces = contry.state[0].city.map(item => ({
          id: item.id,
          parent_id: item.parent_id,
          name: item.name,
          english_name: item.english_name,
          type: item.type
        }));
        this.citySlots[1].values = provinces;
        this.citySlots[2].values = [];
      } else if (values[1].parent_id !== values[0].id) {
        // 重新设置省份
        const contryId = values[0].id;
        const contry = cityData.find(item => item.id === contryId);
        const provinces = contry.state.map(item => ({
          id: item.id,
          parent_id: item.parent_id,
          name: item.name,
          english_name: item.english_name,
          type: item.type
        }));
        const cities = contry.state[0].city.map(item => (
          {
            id: item.id,
            parent_id: item.parent_id,
            name: item.name,
            english_name: item.english_name,
            type: item.type
          }
        ));
        this.citySlots[1].values = provinces;
        this.citySlots[2].values = cities;
      } else if (values[2].parent_id !== values[1].id) {
        const contryId = values[0].id;
        const contry = cityData.find(item => item.id === contryId);
        const province = contry.state.find(item => item.id === values[1].id);
        const cities = province.city.map(item => (
          {
            id: item.id,
            parent_id: item.parent_id,
            name: item.name,
            english_name: item.english_name,
            type: item.type
          }
        ));
      }
    },
    initSlots() {
      const contries = [];
      const provinces = [];
      const cities = [];
      cityData.forEach(item => {
        contries.push({
          id: item.id,
          parent_id: item.parent_id,
          name: item.name,
          english_name: item.english_name,
          type: item.type
        });
      });
      cityData[0].state.forEach(item => {
        provinces.push({
          id: item.id,
          parent_id: item.parent_id,
          name: item.name,
          english_name: item.english_name,
          type: item.type
        });
      });
      cityData[0].state[0].city.forEach(item => {
        cities.push({
          id: item.id,
          parent_id: item.parent_id,
          name: item.name,
          english_name: item.english_name,
          type: item.type
        });
      });
      this.citySlots[0].values = contries;
      this.citySlots[1].values = provinces;
      this.citySlots[2].values = cities;
    }
  },
};
</script>
