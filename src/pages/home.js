import React, { Component } from "react";
import propTypes from "prop-types";

/**
 * COMPONENTS
 */
import { Card } from "../components/card";
import { Form } from "../components/form";
import ModalContent from "../components/modal";
import { Main, Wrapper, Button } from "../components/shared/style";
import { Header, Title, SubTitle } from "../components/header/style";
/**
 * SERVICES
 */
import { ToolsApi } from "../services";

class Home extends Component {
  state = { tools: [] };

  async componentDidMount() {
    const resp = await ToolsApi.index();

    this.setState({ tools: resp.data });
  }

  SearchTools = async e => {
    e.preventDefault();

    if (e.target.checked === true) {
      const resp = await ToolsApi.searchForTag(e.target.value);

      this.setState({ tools: resp.data });
    } else {
      const resp = await ToolsApi.searchForTitle(e.target.value);

      this.setState({ tools: resp.data });
    }
  };

  CreateTools = async e => {
    e.preventDefault();
    const { name, link, desc, tags } = e.target;

    const data = {
      title: name.value,
      link: link.value,
      description: desc.value,
      tags: tags.value.split(" ")
    };

    const resp = await ToolsApi.create(data);

    this.setState(({ tools }) => ({
      tools: tools.concat(resp.data)
    }));
  };

  DeleteTools = async id => {
    ToolsApi.delete(id);

    this.setState(({ tools }) => ({
      tools: tools.filter(tool => tool.id !== id)
    }));
  };

  render() {
    return (
      <>
        <Header>
          <Title>vuttr</Title>
          <SubTitle>Very Useful Tools to Remember</SubTitle>
        </Header>
        <Main>
          <Wrapper>
            <Form onSearching={this.SearchTools} />
            <ModalContent
              onDelete={this.DeleteTools}
              onAction={this.CreateTools}
            >
              <Button>+ Add</Button>
            </ModalContent>
          </Wrapper>
          {this.state.tools.map(tool => (
            <Card
              Key={tool.id}
              Name={tool.title}
              Description={tool.description}
              Tags={tool.tags}
              isAction={this.DeleteTools}
            />
          ))}
        </Main>
      </>
    );
  }
}

Home.propTypes = {
  tools: propTypes.array,
  DeleteTools: propTypes.func,
  CreateTools: propTypes.func,
  SearchTools: propTypes.func
};

export default Home;
