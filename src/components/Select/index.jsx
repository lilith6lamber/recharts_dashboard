import Select from "react-select";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 100%;
    border: 2px solid rgba(255,255,255, .5);
    border-radius: 5px;
    cursor: pointer;
    background: transparent;
    transition: .3s ease-in-out;
  }

  .Select__control:hover {
    border-color: #fff;
  }

  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
    border-color: #fff;
  }

  .Select__indicator {
    color: #c70f61;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;
  }
  
  .Select__input-container, .Select__input-container::placeholder {
    color: #fff;
  }
`;