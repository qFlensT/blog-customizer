import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, ReactNode } from 'react';

export type ArticleParamsFormProps = {
	children?: ReactNode;
	onSubmit?: (e: FormEvent) => void;
};

export const ArticleParamsForm = ({
	children,
	onSubmit,
}: ArticleParamsFormProps) => {
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<div className={styles.bottomContainer}>
				{children}
				<Button title='Сбросить' type='reset' />
				<Button title='Применить' type='submit' />
			</div>
		</form>
	);
};
