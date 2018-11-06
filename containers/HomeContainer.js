import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { MapView, Location, Permissions } from "expo";
import { Button, Container, Header, Content, Text, Left, Body, Title, Right  } from "native-base";
import { observable,action } from 'mobx';

@inject('homeStore')
@observer
export default class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.homeStore; //通过props来导入访问已注入的store
        this.state = {
        };
    }
    render() {
        const { text, num } = this.store;
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                        <Text>{text}</Text>
                    <Button primary onPress={() => this.store.plus()} large light>
                        <Text>add</Text>
                    </Button>
                        <Text>{num}</Text>
                    <Button primary onPress={() => this.store.minus()} large danger>
                        <Text>Minu</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}
