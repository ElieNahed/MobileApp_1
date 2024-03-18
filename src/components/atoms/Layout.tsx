import React from 'react';
import {View, StyleSheet} from 'react-native';

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundColor,
  textColor,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={{flex: 1, backgroundColor, padding: 20}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
