import styles from './Aside.module.scss';
import { ReactNode, useEffect, useRef } from 'react';
import clsx from 'clsx';

export type AsideProps = {
	children?: Partial<{
		openButton: ReactNode;
		content: ReactNode;
	}>;
	open?: boolean;
	onOutsideClick?: () => void;
};

export const Aside = ({
	children,
	open = false,
	onOutsideClick,
}: AsideProps) => {
	const asideRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const listener = (e: MouseEvent) => {
			if (!open || !asideRef.current) return;
			if (asideRef.current.contains(e.target as Node)) return;
			onOutsideClick?.();
		};

		document.addEventListener('click', listener);
		return () => document.removeEventListener('click', listener);
	}, [open]);

	return (
		<>
			{children?.openButton}
			<aside
				ref={asideRef}
				className={clsx(styles.container, open && styles.containerOpen)}>
				{children?.content}
			</aside>
		</>
	);
};
