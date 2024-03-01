/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
 className?: string;
 isOpen: boolean;
 onClose: ()=> void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onClose={onClose} />
        </Suspense>
    </Modal>
);
