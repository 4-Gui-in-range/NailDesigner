import React from 'react';
import { MODEL_BACKDROP_SLIDES } from '@/data/modelPhotos.js';

function CtaBackdropMarquee() {
	const strip = [...MODEL_BACKDROP_SLIDES, ...MODEL_BACKDROP_SLIDES];

	return (
		<div
			className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
			aria-hidden
		>
			<div className="absolute inset-y-0 left-0 flex h-full w-max motion-safe:animate-cta-marquee motion-reduce:animate-none">
				{strip.map((slide, i) => (
					<div
						key={`${slide.src}-${i}`}
						className="relative h-full w-[42vw] shrink-0 sm:w-64 md:w-80 lg:w-96"
					>
						<img
							src={slide.src}
							alt={slide.alt || ''}
							className="h-full w-full object-cover opacity-[0.2]"
							style={{ objectPosition: slide.objectPosition }}
							draggable={false}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default CtaBackdropMarquee;
