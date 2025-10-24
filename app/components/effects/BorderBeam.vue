<template>
	<div
		class="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]"
		:style="{ '--border-beam-width': `${borderWidth}px` }"
	>
		<motion.div
			:class="cn('absolute aspect-square', 'bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent', classProp)"
			:style="{
				width: `${size}px`,
				offsetPath: `rect(0 auto auto 0 round ${size}px)`,
				'--color-from': colorFrom,
				'--color-to': colorTo,
				...style,
			}"
			:initial="{ offsetDistance: `${initialOffset}%` }"
			:animate="{
				offsetDistance: reverse ? [`${100 - initialOffset}%`, `${-initialOffset}%`] : [`${initialOffset}%`, `${100 + initialOffset}%`],
			}"
			:transition="{
				repeat: Infinity,
				ease: 'linear',
				duration,
				delay: -delay,
				...transition,
			}"
		>
		</motion.div>
	</div>
</template>

<script lang="ts" setup>
	import { cn } from "@/lib/utils";
	import { motion } from "motion-v";
	import type { Transition } from "motion-v";
	import type { CSSProperties } from "vue";

	interface BorderBeamProps {
		size?: number;
		duration?: number;
		delay?: number;
		colorFrom?: string;
		colorTo?: string;
		transition?: Transition;
		class?: string;
		style?: CSSProperties;
		reverse?: boolean;
		initialOffset?: number;
		borderWidth?: number;
	}

	const props = withDefaults(defineProps<BorderBeamProps>(), {
		size: 50,
		delay: 0,
		duration: 6,
		colorFrom: "#ffaa40",
		colorTo: "#9c40ff",
		reverse: false,
		initialOffset: 0,
		borderWidth: 1,
		class: "",
		style: () => ({}),
	});

	const { size, duration, delay, colorFrom, colorTo, transition, class: classProp, style, reverse, initialOffset, borderWidth } = toRefs(props);
</script>
