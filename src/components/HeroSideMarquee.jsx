import React from 'react';
import { cn } from '@/lib/utils';
import { PROCEDURE_HERO_SIDES_SLIDES } from '@/data/modelPhotos.js';

function HeroSideMarquee({ reverse = false }) {
	const strip = [
		...PROCEDURE_HERO_SIDES_SLIDES,
		...PROCEDURE_HERO_SIDES_SLIDES,
	];

	return (
		<div className="relative h-full w-full overflow-hidden" aria-hidden>
			<div
				className={cn(
					'flex w-full flex-col motion-reduce:animate-none',
					reverse
						? 'motion-safe:animate-hero-side-marquee-rev'
						: 'motion-safe:animate-hero-side-marquee',
				)}
			>
				{strip.map((slide, i) => (
					<div key={`${slide.src}-${i}`} className="w-full shrink-0 px-2 py-1.5">
						<div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
							<img
								src={slide.src}
								alt={slide.alt || ''}
								className="absolute inset-0 h-full w-full object-cover opacity-[0.2]"
								style={{ objectPosition: slide.objectPosition }}
								draggable={false}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default HeroSideMarquee;
