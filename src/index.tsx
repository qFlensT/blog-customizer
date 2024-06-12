import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Aside } from './components/aside';
import { Text } from './components/text';
import { Select } from './components/select';
import { RadioGroup } from './components/radio-group';
import { Separator } from './components/separator';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<Aside>
				<ArticleParamsForm>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={[{ title: 'Open Sans', value: 'opensans', className: '' }]}
						selected={null}
						title='Шрифт'
					/>
					<RadioGroup
						title='Размер шрифта'
						name='font-size'
						options={[{ title: 'Open Sans', value: 'opensans', className: '' }]}
						selected={{
							title: 'Open Sans',
							value: 'opensans',
							className: '',
						}}
					/>
					<Select
						options={[{ title: 'Open Sans', value: 'opensans', className: '' }]}
						selected={null}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={[{ title: 'Open Sans', value: 'opensans', className: '' }]}
						selected={null}
						title='Цвет фона'
					/>
					<Select
						options={[{ title: 'Open Sans', value: 'opensans', className: '' }]}
						selected={null}
						title='Ширина контента'
					/>
				</ArticleParamsForm>
			</Aside>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
