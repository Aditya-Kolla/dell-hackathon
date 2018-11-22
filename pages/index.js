// Copyright (c) 2018 Nguyen Vu Nhat Minh
// Distributed under the MIT software license, see the accompanying file LICENSE

import {Component} from 'react';
import {
    Button,
    Container,
    List,
    Image,
    Grid,
    Message,
    Rail,
    Sticky,
    Input,
    Segment
} from 'semantic-ui-react';
import HeaderMenu from '../views/HeaderMenu';
import web3 from '../ethereum/web3';
import PrivateKeyModal from '../views/modals/EnterPrivateKeyModal';
import UpdateProfileModal from '../views/modals/UpdateProfileModal';
    import Head from 'next/head';
import AppManager from '../core/AppManager';
import ContactList from '../views/ContactList';
import Chat from '../views/Chat';
import ErrorModal from '../views/modals/ErrorModal';
import SettingsModal from '../views/modals/SettingsModal';
import TransactionModal from '../views/modals/TransactionModal';
import Footer from '../views/Footer';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, contactList: [], messages: [], selectedContact: "" };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.app = new AppManager();
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillMount() {
        this.app.initialize();
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        var account = this.app.account;
        var contractManager = this.app.contractManager;
        var transactionDispatcher = this.app.getTransactionDispatcher();

        var listHeight = this.state.height - 140;
        return (
            <Container>
                <Head>
                
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css" rel="stylesheet"/>
                    <link rel="stylesheet" href="http://localhost/assets/page.css"/>
                    <title>BlockChain Chat</title>
                </Head>

                <UpdateProfileModal account={account} contractManager={contractManager} />
                <PrivateKeyModal account={account} />
                <HeaderMenu account={account} contractManager={contractManager} transactionDispatcher={transactionDispatcher}/>
                <ErrorModal />
                <SettingsModal account={account} />
                <TransactionModal dispatcher={transactionDispatcher} />
            {/* <Grid column={2} style={{paddingTop: 100}}>
                <Grid.Row stretched>
                    <Grid.Column width={6} style={{height: listHeight + "px", float: 'left'}}>
                        <ContactList height={listHeight} account={account} contractManager={contractManager}/>
                    </Grid.Column>
                    <Grid.Column width={10} style={{height: listHeight + "px", overflow: 'auto', float: 'left'}}>
                        <Chat height={listHeight} account={account} contractManager={contractManager}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
            {/* <Footer /> */}
            <br/><br/><br/><br/><br/>
            <div class="">
<div class="messaging">
      <div class="inbox_msg">
      <ContactList height={listHeight} account={account} contractManager={contractManager}/>
        {/* ContactEnds In here */}
        <div class="mesgs">
        {/* Message Item And Text Inputs Starts here */}
        <Chat height={listHeight} account={account} contractManager={contractManager}/>
        </div>
      </div>
      
    </div></div>
            </Container>
        );
    }
}

export default Index;