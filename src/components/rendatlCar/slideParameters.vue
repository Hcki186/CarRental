<template>
  <div class="parameters">
    <div class="carSpec flexCarInfo">
        <div class="leftSide">
            <div class="power flex">
                <img class="iconSlide" src="https://img.icons8.com/external-wanicon-lineal-wanicon/32/external-engine-car-service-wanicon-lineal-wanicon.png" alt="power"/>
                <p>{{ item.enginePower }}</p>
            </div>
            <div class="engin flex">
                <img class="iconSlide" src="https://img.icons8.com/ios/32/turbocharger.png" alt="turbocharger"/>
                <p>{{ item.enginType }}</p>
            </div>
            <div class="acceleration flex">
                <img class="iconSlide" src="https://img.icons8.com/ios/32/speed--v1.png" alt="speed--v1"/>
                <p>{{ item.acceleration }}</p>
            </div>
        </div>
        <div class="rightSide">
            <div class="Chassis flex">
                <img class="iconSlide" src="https://img.icons8.com/external-those-icons-lineal-those-icons/32/external-chassis-cars-components-those-icons-lineal-those-icons.png" alt="Chassis"/>
                <p>{{ item.Chassis }}</p>
            </div>
            <div class="gearbox flex">
                <img class="iconSlide" src="https://img.icons8.com/ios-glyphs/32/gearbox-selector.png" alt="gearbox-selector"/>
                <p>{{ item.gearbox }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "slideParameters"
    }
</script>

<style>

</style>