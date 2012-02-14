//
//  RTListItemCell.m
//  Notes
//
//  Created by Ryan Ashcraft on 2/14/12.
//  Copyright (c) 2012 TS Software. All rights reserved.
//

#import "RTListItemCell.h"

#define Y_MARGIN 5
#define X_MARGIN 12

@implementation RTListItemCell

@synthesize delegate = _delegate;
@synthesize textField = _textField;

- (id)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    self = [super initWithStyle:style reuseIdentifier:reuseIdentifier];
    if (self) {
        _textField = [[UITextField alloc] initWithFrame:CGRectZero];
        _textField.clearsOnBeginEditing = NO;
        _textField.textAlignment = UITextAlignmentLeft;
        [_textField setDelegate:self];
        [self.contentView addSubview:_textField];

        self.selectionStyle = UITableViewCellSelectionStyleNone;
        [[self textLabel] setHidden:YES];
    }
    
    return self;
}

- (void)setHighlighted:(BOOL)highlighted animated:(BOOL)animated {
    // don't highlight
}

- (void)setSelected:(BOOL)selected animated:(BOOL)animated {
    // don't select
    //[super setSelected:selected animated:animated];
}

#pragma mark - Laying out subviews

- (void)layoutSubviews {
    [super layoutSubviews];
        
    CGRect rect = CGRectMake(X_MARGIN, 
                             (self.bounds.size.height - [[_textField font] lineHeight]) / 2,
                             self.bounds.size.width - X_MARGIN * 2,
                             [[_textField font] lineHeight]);
    [_textField setFrame:rect];
}

#pragma mark - Text field delegate

- (void)textFieldDidBeginEditing:(UITextField *)textField {
    [_delegate contentMightChangeInCell:self];
}

- (void)textFieldDidEndEditing:(UITextField *)textField {
    [_delegate content:[textField text] changedInCell:self];
}

@end
