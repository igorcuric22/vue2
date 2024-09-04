<template>
    <h3>Component</h3>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="bottomSlot2"></slot>
    </div>
</template>

<script></script>

<style scoped>
    div {
        width: 50%;
        border: dotted black 1px;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
</style>  