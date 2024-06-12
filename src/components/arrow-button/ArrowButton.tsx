import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { MouseEvent } from 'react';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type ArrowButtonProps = {
	onClick?: (e: MouseEvent<HTMLDivElement>) => void;
	open?: boolean;
};

export const ArrowButton = ({ onClick, open = false }: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, open && styles.containerOpen)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, open && styles.arrowOpen)}
			/>
		</div>
	);
};
