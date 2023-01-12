import React, { Component } from "react";
// import IconButtonLabel from 'components/IconButtonLabel';
import SnackBar from "../../components/SnackBar";
// import { FormattedMessage } from "react-intl";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Divider from "@material-ui/core/Divider";
// import messages from "./messages";
import Switch from "../Switch";
import { StyledContainer, StyledDiv, ItemContainer } from "./styles";
import { apiClient } from "../../../services/apiClient";

class OgcHoldForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ogcHold: true,
      open: false,
    };

    this.onTogleOgcHoldClick = this.onTogleOgcHoldClick.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onTogleOgcHoldClick(value) {
    this.setState({ ...this.state, ...value });
    apiClient.setState(value.ogcHold ? 'Enabled' : 'Disabled'); // set state via API
  }

  onCheckboxChange({ target: { name } }, value) {
    this.setState({ ogcHold: !this.state.ogcHold });
  }

  componentDidMount() {
    const data = apiClient.getData();
    if (data.data.state === 'Enabled') {
      this.setState({ ogcHold: true, isLoading: false });
    } else {
      this.setState({ ogcHold: false, isLoading: false });
    }
  }

  render() {
    return (
      <>
        <StyledContainer maxWidth="md">
          <StyledDiv>
            <ItemContainer>
              <div>Enable Ogc Hold Task</div>
              <div>
                <Switch
                  name="ogcHold"
                  onChange={this.onTogleOgcHoldClick}
                  value={this.state.ogcHold}
                />
              </div>
            </ItemContainer>
          </StyledDiv>
        </StyledContainer>
        <SnackBar
          value={this.state.open}
          ogcHold={this.state.ogcHold}
          onChange={this.onTogleOgcHoldClick}
        />
      </>
    );
  }
}
export default OgcHoldForm;
