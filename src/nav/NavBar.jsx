import React from 'react';
import { Button, Container, Icon, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Hungry Panda
                </Menu.Item>
                <Menu.Item position="right">
                    <Icon name='shopping cart' size="big" style={{marginRight: 15}} />
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}