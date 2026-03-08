
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { initSoundEffects } from "../../store/soundEffects/actions";

const mapDispatchToProps = { initSoundEffects };

const mapStateToProps = state => ({ 
  correctSoundEffect: state.soundEffects.correctSoundEffect,
  wrongSoundEffect: state.soundEffects.wrongSoundEffect,
});

export default (WrappedComponent) => {
  const InjectedComponent = (props) => {
    const { correctSoundEffect, initSoundEffects } = props;
    const dispatch = useDispatch();
    useEffect(() => {
      if (!correctSoundEffect) {
        initSoundEffects();
      }
    }, []);
    return <WrappedComponent {...props} />;
  };

  return connect(mapStateToProps, mapDispatchToProps)(InjectedComponent);
};