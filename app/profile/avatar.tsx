import AvatarList from "@/components/AvatarList";
import FixedButtonCTA from "@/components/FixedButtonCTA";
import Tab from "@/components/Tab";
import useGetAvatarItems from "@/hooks/queries/useGetAvatarItems";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

const AvatarScreen = () => {
  const { hats, faces, tops, bottoms, hands, skins } = useGetAvatarItems();
  const [currentTab, setCurrentTab] = useState(0);
  const pagerViewRef = useRef<PagerView>(null);

  const handleTabPress = (index: number) => {
    pagerViewRef.current?.setPage(index);
    setCurrentTab(index);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {["모자", "얼굴", "상의", "하의", "손", "피부"].map((item, index) => (
            <Tab
              key={item}
              isActive={currentTab === index}
              onPress={() => handleTabPress(index)}
            >
              {item}
            </Tab>
          ))}
        </View>
        <PagerView
          ref={pagerViewRef}
          initialPage={0}
          onPageSelected={(e) => setCurrentTab(e.nativeEvent.position)}
          style={styles.pagerView}
        >
          <AvatarList data={hats} key="1" />
          <AvatarList data={faces} key="2" />
          <AvatarList data={tops} key="3" />
          <AvatarList data={bottoms} key="4" />
          <AvatarList data={hands} key="5" />
          <AvatarList data={skins} key="6" />
        </PagerView>
      </View>
      <FixedButtonCTA
        label="저장"
        onPress={() => {}}
        showBottomBorder={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
  },
  pagerView: {
    flex: 1,
  },
});

export default AvatarScreen;
