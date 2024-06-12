import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { Aside } from './components/aside';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const getStyleObj = (value: ArticleStateType) => {
		return {
			'--font-family': value.fontFamilyOption.value,
			'--font-size': value.fontSizeOption.value,
			'--font-color': value.fontColor.value,
			'--container-width': value.contentWidth.value,
			'--bg-color': value.backgroundColor.value,
		} as CSSProperties;
	};

	const [style, setStyle] = useState<CSSProperties>(
		getStyleObj(defaultArticleState)
	);

	const handleSetStyle = (value: ArticleStateType) =>
		setStyle(getStyleObj(value));

	return (
		<div className={clsx(styles.main)} style={style}>
			<Aside>
				<ArticleParamsForm onSubmit={handleSetStyle} onReset={handleSetStyle} />
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
