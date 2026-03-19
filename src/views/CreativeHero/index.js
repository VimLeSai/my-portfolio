import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useToasts } from '@contexts/toasts';
import { toLowerCase } from '@utils';
import rules from '@common/rules';
import { GrainedText } from '@components';
import { gsap } from 'gsap';
import { StyledHero, SubTitle, FormWrapper, StyledInput, StyledButton, Metadata } from './styles';

const CreativeHero = ({ remaining }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });
  const { ToastsType, addToastWithTimeout } = useToasts();
  const heroRef = useRef(null);

  useEffect(() => {
    if (remaining === 0) {
      addToastWithTimeout(ToastsType.ERROR, 'Github API rate limit exceeded try again in 1 hour');
    }

    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, [remaining]);

  const onSubmit = ({ username }) => {
    if (!username || remaining === 0) return;
    const formattedUsername = toLowerCase(username);
    if (window !== undefined) window.location = `/portfolio/${formattedUsername}`;
  };

  return (
    <StyledHero ref={heroRef}>
      <SubTitle className="reveal">Portfolio Generator v1.0</SubTitle>
      <div className="reveal">
        <GrainedText text="VimLeSai" fontSize={140} />
      </div>

      <FormWrapper className="reveal">
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            disabled={remaining === 0}
            placeholder="GITHUB USERNAME"
            type="text"
            autoComplete="off"
            {...register('username', rules.username)}
          />
          <StyledButton type="submit" disabled={!isValid || remaining === 0}>
            Create Portfolio
          </StyledButton>
        </form>
      </FormWrapper>

      <Metadata className="reveal">
        NYC / 040.7128° N, 074.0060° W
        <br />
        SF / 037.7749° N, 122.4194° W
        <br />
        AVAILABLE REQUESTS: {remaining} / 60
      </Metadata>
    </StyledHero>
  );
};

CreativeHero.propTypes = {
  remaining: PropTypes.number,
};

export default CreativeHero;
