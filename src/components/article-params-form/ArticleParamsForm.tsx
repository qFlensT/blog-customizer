import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, ReactNode, useState } from 'react';
import { Text } from '../text';
import { Select } from '../select';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

export type ArticleParamsFormProps = {
	children?: ReactNode;
	onSubmit?: (value: ArticleStateType) => void;
	onReset?: (value: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	onSubmit,
	onReset,
}: ArticleParamsFormProps) => {
	const [articleParams, setArticleParams] =
		useState<ArticleStateType>(defaultArticleState);

	const handleSetParams = (
		keyName: keyof typeof articleParams,
		value: OptionType
	) => {
		setArticleParams((prev) => ({ ...prev, [keyName]: value }));
	};

	const handleReset = () => {
		setArticleParams(defaultArticleState);
		onReset?.(defaultArticleState);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSubmit?.(articleParams);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
			<Text as='h2' size={31} weight={800} uppercase>
				Задайте параметры
			</Text>
			<Select
				title='Шрифт'
				options={fontFamilyOptions}
				selected={articleParams.fontFamilyOption}
				onChange={(v) => handleSetParams('fontFamilyOption', v)}
			/>
			<RadioGroup
				title='Размер шрифта'
				name='font-size'
				options={fontSizeOptions}
				selected={articleParams.fontSizeOption}
				onChange={(v) => handleSetParams('fontSizeOption', v)}
			/>
			<Select
				title='Цвет шрифта'
				options={fontColors}
				selected={articleParams.fontColor}
				onChange={(v) => handleSetParams('fontColor', v)}
			/>
			<Separator />
			<Select
				title='Цвет фона'
				options={backgroundColors}
				selected={articleParams.backgroundColor}
				onChange={(v) => handleSetParams('backgroundColor', v)}
			/>
			<Select
				title='Ширина контента'
				options={contentWidthArr}
				selected={articleParams.contentWidth}
				onChange={(v) => handleSetParams('contentWidth', v)}
			/>
			<div className={styles.bottomContainer}>
				<Button title='Сбросить' type='reset' />
				<Button title='Применить' type='submit' />
			</div>
		</form>
	);
};
