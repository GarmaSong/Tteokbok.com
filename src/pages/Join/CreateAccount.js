import React, { useState } from 'react';
import Container from '../../components/AccountContainer/components/Container';
import SocialBtnGroup from '../../components/AccountContainer/components/SocialBtnGroup';
import Title from '../../components/AccountContainer/components/Title';
import Input from '../../components/AccountContainer/components/Input';
import styled from 'styled-components/macro';
import Button from '../../components/Button/Button';
import Divider from '../../components/AccountContainer/components/Divider';
import { Link, useHistory } from 'react-router-dom';
import Section from '../../components/AccountContainer/components/Section';
import { API } from '../../config';

function CreateAccount() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [secondaryInput, setSecondaryInput] = useState({
    secondaryEmail: '',
    secondaryPassword: '',
  });
  const [isChecks, setIsChecks] = useState({
    all: false,
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });

  const handleTextInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSecondaryInput = e => {
    const { name, value } = e.target;
    setSecondaryInput({
      ...secondaryInput,
      [name]: value,
    });
  };

  const handleCheckInput = e => {
    const { name, checked } = e.target;
    setIsChecks({
      ...isChecks,
      [name]: checked,
    });
  };

  const allCheck = () => {
    const { check1, check2, check3 } = isChecks;
    const isChecked = check1 && check2 && check3;
    if (!isChecked) {
      setIsChecks({
        check1: true,
        check2: true,
        check3: true,
        check4: true,
      });
    } else if (!check1 || !check2 || !check3) {
      setIsChecks({
        ...isChecks,
        all: false,
      });
    } else {
      setIsChecks({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
      });
    }
  };

  const handleSignUp = () => {
    if (username && email && password && isEqual && isChecked) {
      fetch(`${API.SIGNUP}`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 'SUCCESS') {
            alert('???????????? ??????????????????.');
            history.push('/signin');
          } else if (res.status === 'DUPLICATED_ENTRY_ERROR') {
            alert('?????? ????????? ??????????????????.');
          } else if (res.status === 'INVALID_DATA_ERROR') {
            alert('????????? ??????????????????.');
          }
        });
    }
  };

  const { username, email, password } = inputs;
  const { secondaryEmail, secondaryPassword } = secondaryInput;
  const { check1, check2, check3, check4 } = isChecks;
  const isEqual = email === secondaryEmail && password === secondaryPassword;
  const isChecked = check1 && check2 && check3;

  return (
    <Container>
      <Styledform>
        <Title title="???????????? ????????????" />
        <Section title="??????" input>
          <Input
            value={username}
            name="username"
            onChange={handleTextInput}
            type="text"
            placeholder="???????????? ????????? ??????????????????."
          />
        </Section>
        <Section title="????????? ??????" input>
          <Input
            value={email}
            name="email"
            onChange={handleTextInput}
            type="email"
            placeholder="????????? ????????? ??????????????????."
          />
          <Input
            value={secondaryEmail}
            name="secondaryEmail"
            onChange={handleSecondaryInput}
            type="email"
            placeholder="????????? ????????? ??????????????????."
          />
          {email !== secondaryEmail && (
            <ErrorMsg>???????????? ???????????? ????????????.</ErrorMsg>
          )}
        </Section>
        <Section title="????????????" input>
          <Input
            value={password}
            name="password"
            onChange={handleTextInput}
            type="password"
            placeholder="??????????????? ??????????????????."
          />
          <Input
            value={secondaryPassword}
            name="secondaryPassword"
            onChange={handleSecondaryInput}
            type="password"
            placeholder="??????????????? ??????????????????."
          />
          {password !== secondaryPassword && (
            <ErrorMsg>??????????????? ???????????? ????????????.</ErrorMsg>
          )}
        </Section>
        <Section title="????????????" checkbox>
          <Input
            name="all"
            type="checkbox"
            onChange={allCheck}
            checked={isChecked}
          />
        </Section>
        <StyledHr />
        <Section title="????????? ?????? ????????????" checkbox>
          <Input
            name="check1"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check1}
          />
        </Section>
        <Section title="???????????? ??????, ?????? ??????" checkbox>
          <Input
            name="check2"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check2}
          />
        </Section>
        <Section title="??? 14??? ???????????????." checkbox>
          <Input
            name="check3"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check3}
          />
        </Section>
        <Section title="????????? ?????? ?????? ??????(??????)" checkbox>
          <Input
            name="check4"
            onChange={handleCheckInput}
            type="checkbox"
            checked={check4}
          />
        </Section>
        <StyledButton
          type="button"
          color={isEqual && isChecked ? 'red' : 'blue'}
          fullWidth
          disabled={!(isEqual && isChecked)}
          onClick={handleSignUp}
        >
          ????????????
        </StyledButton>
      </Styledform>
      <StyledLink>
        ?????? ???????????? ????????? ????????????????
        <Link to="/signin">?????? ???????????? ???????????????</Link>
      </StyledLink>
      <Divider />
      <SocialBtnGroup text="????????????" />
    </Container>
  );
}

const Styledform = styled.form`
  font-size: 13px;
  [type='checkbox'] {
    width: 20px;
    height: 20px;
  }
`;

const ErrorMsg = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
  padding-left: 4px;
`;

const StyledButton = styled(Button)`
  height: 52px;
`;

const StyledHr = styled.div`
  margin: 0 0 1rem 0px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.border}; ;
`;

const StyledLink = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.015em;
  margin: 20px 0px 0px;
  color: rgb(109, 109, 109);

  & a {
    margin-left: 0.5rem;
  }
`;

export default CreateAccount;
