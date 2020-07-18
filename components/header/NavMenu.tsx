import React from 'react';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';
import classNames from 'classnames';

interface NaveMenuItemProps {
    title: string;
    href: string;
    activeRoute: string;
}

const NaveMenuItem = (props: NaveMenuItemProps) => {
    const className = classNames({
        active: props.activeRoute === props.href,
    })

    return (
        <li>
            <a href={props.href} className={className}>{props.title}</a>
        </li>
    )
};

interface NavMenuProps extends WithRouterProps {}

const NavMenu = (props: NavMenuProps) => {
    const activeRoute = props.router.route;

    return (
        <nav className="nav-menu d-none d-lg-block">
            <ul>
                <NaveMenuItem activeRoute={activeRoute} href="/" title="Página Inicial" />
                <NaveMenuItem activeRoute={activeRoute} href="/servicos" title="Serviços" />
                <NaveMenuItem activeRoute={activeRoute} href="/login" title="Login" />
                <NaveMenuItem activeRoute={activeRoute} href="/localizacao" title="Localização" />
                <NaveMenuItem activeRoute={activeRoute} href="/contato" title="Fale Conosco" />
            </ul>
        </nav>
    )
};

export default withRouter(NavMenu);