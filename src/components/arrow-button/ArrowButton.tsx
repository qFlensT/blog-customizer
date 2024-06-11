import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { MouseEvent } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type ArrowButtonProps = {
	onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};

export const ArrowButton = ({ onClick }: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};
