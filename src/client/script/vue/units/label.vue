<template>
    <ai-row class="label">
        <span v-if="compiledText !== ''"
              class="text">{{ compiledText }}</span>
        <slot/>
    </ai-row>
</template>
<script>
import style from '#/component/style/style';

export default {
    name: 'Label',
    components: {
        ...'@/container/row.vue',
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        root: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            compiledText: '',
            watchersText: [],
        };
    },
    style: {
        group: 'default',
        overwrite: false,
        rules: {
            '[size="#{$size}"] .label': ['padding: 0 #{$size * 0.3}px'],
            '[size="#{$size}"] .label > .text': [
                'height: #{$size}px',
                'line-height: #{$size}px',
                'font-size: #{$size * 0.15 + 7}px',
            ],
        },
    },
    mounted() {
        style.set(this, { size: style.get('size', this, 40) });
        this.compiledText = this.text;
        this.$watch('text', () => {
            this.compiledText = this.text;
        });
        // this.$watch('value', () => {
        //     complier(this, 'text', 'compiledText', 'watchersText', this.root, true);
        // });
        // complier(this, 'text', 'compiledText', 'watchersText', this.root, true);
    },
};
</script>