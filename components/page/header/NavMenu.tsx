import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import classNames from 'classnames';

interface NaveMenuItemProps {
    title: string;
    href: string;
    activeRoute: string;
}

const NaveMenuItem = (props: NaveMenuItemProps) => {
    const className = classNames('nav-item', {
        active: props.activeRoute === props.href,
    })

    return (
        <li className={className}>
            <a href={props.href} className="nav-link">{props.title}</a>
        </li>
    )
};

interface NavMenuProps extends WithRouterProps {}

const NavMenu = (props: NavMenuProps) => {
    const activeRoute = props.router.route;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/" passHref>
                <a className="navbar-brand juniauto-logo">JUNIAUTO</a>
            </Link>
            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Expandir navegação" onClick={toggle}>
                <span className="navbar-toggler-icon" />
            </button>
            <div className={classNames('collapse navbar-collapse', { show: isOpen })} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <NaveMenuItem activeRoute={activeRoute} href="/" title="Página Inicial" />
                    <NaveMenuItem activeRoute={activeRoute} href="/servicos" title="Serviços" />
                    <NaveMenuItem activeRoute={activeRoute} href="/login" title="Login" />
                    <NaveMenuItem activeRoute={activeRoute} href="/localizacao" title="Localização" />
                    <NaveMenuItem activeRoute={activeRoute} href="/contato" title="Fale Conosco" />
                </ul>
            </div>
        </nav>
    )
};

export default withRouter(NavMenu);