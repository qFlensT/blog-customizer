import styles from './Aside.module.scss';
import { ReactNode, useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickClose } from 'src/common/hooks/useOutsideClickClose';
import { ArrowButton } from '../arrow-button';

export type AsideProps = {
	children?: ReactNode;
};

export const Aside = ({ children }: AsideProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const asideRef = useRef<HTMLElement | null>(null);

	useOutsideClickClose({
		isOpen: isOpen,
		rootRef: asideRef,
		onClose: () => setIsOpen(false),
	});

	return (
		<>
			<ArrowButton
				onClick={(e) => {
					e.stopPropagation();
					setIsOpen((prev) => !prev);
				}}
				open={isOpen}
			/>
			<aside
				ref={asideRef}
				className={clsx(styles.container, isOpen && styles.containerOpen)}>
				{children}
			</aside>
		</>
	);
};
